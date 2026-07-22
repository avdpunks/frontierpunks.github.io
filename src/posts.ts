export interface PostFrontmatter {
  title: string;
  date: string;
  author?: string;
  excerpt?: string;
  tags?: string[];
  cover?: string;
}

export interface Post extends PostFrontmatter {
  slug: string;
  content: string;
}

// Eagerly import every markdown file in /posts as raw text.
const rawPosts = import.meta.glob('/posts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

function slugFromPath(filePath: string): string {
  const file = filePath.split('/').pop() ?? filePath;
  return file.replace(/\.md$/, '').toLowerCase();
}

// Minimal YAML-ish frontmatter parser. Supports:
//   key: value            -> string (quotes optional)
//   key: [a, b, "c"]      -> string array
// Anything more exotic and we should reach for a real YAML parser.
function parseFrontmatter(raw: string): {
  data: Record<string, unknown>;
  content: string;
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  const [, block, content] = match;

  const data: Record<string, unknown> = {};
  for (const rawLine of block.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const kv = line.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/);
    if (!kv) continue;
    const key = kv[1];
    let value: string = kv[2].trim();

    if (value.startsWith('[') && value.endsWith(']')) {
      const inner = value.slice(1, -1).trim();
      data[key] = inner
        ? inner
            .split(',')
            .map((s) => s.trim().replace(/^["']|["']$/g, ''))
            .filter(Boolean)
        : [];
      continue;
    }

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }

  return { data, content };
}

function parsePost(filePath: string, raw: string): Post {
  const { data, content } = parseFrontmatter(raw);
  const fm = data as Partial<PostFrontmatter>;
  return {
    slug: slugFromPath(filePath),
    title: fm.title ?? 'Untitled',
    date: fm.date ?? new Date().toISOString().slice(0, 10),
    author: fm.author,
    excerpt: fm.excerpt,
    tags: fm.tags ?? [],
    cover: fm.cover,
    content,
  };
}

export const posts: Post[] = Object.entries(rawPosts)
  .map(([filePath, raw]) => parsePost(filePath, raw))
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

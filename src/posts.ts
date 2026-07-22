import matter from 'gray-matter';

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

function parsePost(filePath: string, raw: string): Post {
  const { data, content } = matter(raw);
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

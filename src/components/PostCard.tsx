import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardPreview,
  Body1,
  Caption1,
  Subtitle1,
  Tag,
  makeStyles,
  shorthands,
  tokens,
} from '@fluentui/react-components';
import type { Post } from '../posts';

const useStyles = makeStyles({
  card: {
    height: '100%',
    ...shorthands.padding('16px'),
    transitionProperty: 'transform, box-shadow, border-color',
    transitionDuration: '160ms',
    ':hover': {
      transform: 'translateY(-2px)',
      boxShadow: tokens.shadow16,
      ...shorthands.borderColor(tokens.colorBrandStroke1),
    },
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
    height: '100%',
  },
  preview: {
    height: '140px',
    background:
      'linear-gradient(135deg, rgba(139,92,246,0.35) 0%, rgba(34,211,238,0.25) 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: tokens.colorNeutralForeground1,
    fontSize: '48px',
    fontWeight: 700,
    letterSpacing: '-1px',
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    ...shorthands.overflow('hidden'),
  },
  meta: {
    display: 'flex',
    columnGap: '8px',
    rowGap: '4px',
    flexWrap: 'wrap',
    marginTop: '8px',
  },
  excerpt: {
    marginTop: '8px',
    color: tokens.colorNeutralForeground2,
  },
});

interface Props {
  post: Post;
}

function initials(title: string): string {
  const words = title.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return '?';
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

export function PostCard({ post }: Props) {
  const styles = useStyles();
  const dateStr = new Date(post.date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Link to={`/posts/${post.slug}`} className={styles.link}>
      <Card className={styles.card}>
        <CardPreview>
          {post.cover ? (
            <img
              src={post.cover}
              alt=""
              style={{ width: '100%', height: 140, objectFit: 'cover' }}
            />
          ) : (
            <div className={styles.preview}>{initials(post.title)}</div>
          )}
        </CardPreview>
        <CardHeader
          header={<Subtitle1>{post.title}</Subtitle1>}
          description={
            <Caption1>
              {dateStr}
              {post.author ? ` · ${post.author}` : ''}
            </Caption1>
          }
        />
        {post.excerpt && <Body1 className={styles.excerpt}>{post.excerpt}</Body1>}
        {post.tags && post.tags.length > 0 && (
          <div className={styles.meta}>
            {post.tags.map((tag) => (
              <Tag key={tag} size="small" appearance="brand">
                {tag}
              </Tag>
            ))}
          </div>
        )}
      </Card>
    </Link>
  );
}

import { Link } from 'react-router-dom';
import {
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
  link: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
    height: '100%',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(20, 20, 28, 0.55)',
    ...shorthands.border('1px', 'solid', 'rgba(255, 255, 255, 0.06)'),
    borderRadius: '14px',
    backdropFilter: 'blur(10px)',
    ...shorthands.overflow('hidden'),
    transitionProperty: 'transform, box-shadow, border-color, background-color',
    transitionDuration: '200ms',
    ':hover': {
      transform: 'translateY(-3px)',
      backgroundColor: 'rgba(28, 24, 40, 0.7)',
      ...shorthands.borderColor('rgba(139, 92, 246, 0.45)'),
      boxShadow:
        '0 12px 40px rgba(0,0,0,0.5), 0 0 24px rgba(139,92,246,0.18)',
    },
  },
  preview: {
    height: '132px',
    position: 'relative',
    backgroundImage:
      'linear-gradient(135deg, rgba(139,92,246,0.55), rgba(34,211,238,0.35) 60%, rgba(244,114,182,0.45))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(255,255,255,0.95)',
    fontSize: '44px',
    fontWeight: 800,
    letterSpacing: '-1px',
    ...shorthands.overflow('hidden'),
  },
  previewScan: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundImage:
      'repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 4px)',
    mixBlendMode: 'overlay',
    pointerEvents: 'none',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    rowGap: '8px',
    ...shorthands.padding('16px', '18px', '18px'),
  },
  excerpt: {
    color: tokens.colorNeutralForeground2,
    flexGrow: 1,
  },
  meta: {
    display: 'flex',
    columnGap: '6px',
    rowGap: '4px',
    flexWrap: 'wrap',
    marginTop: '4px',
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
      <article className={styles.card}>
        <div className={styles.preview}>
          {post.cover ? (
            <img
              src={post.cover}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <>
              <span>{initials(post.title)}</span>
              <span className={styles.previewScan} />
            </>
          )}
        </div>
        <div className={styles.body}>
          <Subtitle1>{post.title}</Subtitle1>
          <Caption1>
            {dateStr}
            {post.author ? ` · ${post.author}` : ''}
          </Caption1>
          {post.excerpt && <Body1 className={styles.excerpt}>{post.excerpt}</Body1>}
          {post.tags && post.tags.length > 0 && (
            <div className={styles.meta}>
              {post.tags.map((tag) => (
                <Tag key={tag} size="extra-small" appearance="brand">
                  {tag}
                </Tag>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}

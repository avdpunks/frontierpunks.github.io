import {
  LargeTitle,
  Body1,
  makeStyles,
  shorthands,
  tokens,
} from '@fluentui/react-components';
import { posts } from '../posts';
import { PostCard } from '../components/PostCard';

const useStyles = makeStyles({
  hero: {
    ...shorthands.padding('24px', '0', '40px'),
  },
  tagline: {
    marginTop: '12px',
    color: tokens.colorNeutralForeground2,
    maxWidth: '640px',
  },
  gradient: {
    background:
      'linear-gradient(90deg, #8b5cf6 0%, #22d3ee 50%, #f472b6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    columnGap: '20px',
    rowGap: '20px',
  },
  empty: {
    ...shorthands.padding('40px'),
    textAlign: 'center',
    color: tokens.colorNeutralForeground3,
    ...shorthands.border('1px', 'dashed', tokens.colorNeutralStroke2),
    ...shorthands.borderRadius(tokens.borderRadiusLarge),
  },
});

export function HomePage() {
  const styles = useStyles();
  return (
    <>
      <section className={styles.hero}>
        <LargeTitle as="h1" block>
          <span className={styles.gradient}>Dispatches</span> from the frontier.
        </LargeTitle>
        <Body1 as="p" block className={styles.tagline}>
          Ben and Daniel. Azure Virtual Desktop, Windows 365, modern management,
          and AI agents — with the scripts, the fixes, and the lessons the docs
          leave out.
        </Body1>
      </section>

      {posts.length === 0 ? (
        <div className={styles.empty}>
          <Body1>No posts yet. Drop a markdown file into <code>/posts</code> to get started.</Body1>
        </div>
      ) : (
        <div className={styles.grid}>
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </>
  );
}

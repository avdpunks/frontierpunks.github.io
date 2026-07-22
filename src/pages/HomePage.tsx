import { Link } from 'react-router-dom';
import {
  Body1,
  Caption1,
  Tag,
  Title2,
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
} from '@fluentui/react-components';
import { ArrowRight24Regular } from '@fluentui/react-icons';
import { posts } from '../posts';
import { PostCard } from '../components/PostCard';

const useStyles = makeStyles({
  hero: {
    ...shorthands.padding('56px', '0', '48px'),
    position: 'relative',
  },
  eyebrow: {
    fontFamily: `'Cascadia Code', 'Fira Code', ui-monospace, monospace`,
    fontSize: '13px',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: '#8b5cf6',
    marginBottom: '16px',
    display: 'inline-flex',
    alignItems: 'center',
    columnGap: '10px',
  },
  eyebrowDot: {
    display: 'inline-block',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#22d3ee',
    boxShadow: '0 0 12px #22d3ee, 0 0 24px rgba(34,211,238,0.6)',
    animationName: 'pulseDot',
    animationDuration: '2s',
    animationTimingFunction: 'ease-in-out',
    animationIterationCount: 'infinite',
  },
  heroTitle: {
    fontSize: 'clamp(48px, 8vw, 92px)',
    fontWeight: 800,
    letterSpacing: '-0.03em',
    lineHeight: 1.02,
    marginTop: '0',
    marginBottom: '0',
  },
  gradient: {
    backgroundImage:
      'linear-gradient(100deg, #a78bfa 0%, #22d3ee 45%, #f472b6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
  },
  tagline: {
    marginTop: '20px',
    color: tokens.colorNeutralForeground2,
    maxWidth: '640px',
    fontSize: '18px',
    lineHeight: 1.6,
  },
  taglineMono: {
    display: 'block',
    marginTop: '14px',
    fontFamily: `'Cascadia Code', 'Fira Code', ui-monospace, monospace`,
    fontSize: '13px',
    color: tokens.colorNeutralForeground3,
  },

  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    columnGap: '14px',
    marginTop: '32px',
    marginBottom: '20px',
  },
  sectionRule: {
    flexGrow: 1,
    height: '1px',
    backgroundImage:
      'linear-gradient(90deg, rgba(139,92,246,0.5) 0%, rgba(139,92,246,0) 100%)',
  },
  sectionLabel: {
    fontFamily: `'Cascadia Code', 'Fira Code', ui-monospace, monospace`,
    fontSize: '12px',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: tokens.colorNeutralForeground3,
  },

  featured: {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: '1.15fr 1fr',
    columnGap: '32px',
    rowGap: '24px',
    ...shorthands.padding('32px'),
    borderRadius: '20px',
    backgroundImage:
      'linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(34,211,238,0.08) 60%, rgba(244,114,182,0.10) 100%)',
    ...shorthands.border('1px', 'solid', 'rgba(255,255,255,0.08)'),
    backdropFilter: 'blur(12px)',
    boxShadow: '0 10px 40px rgba(0,0,0,0.35)',
    ...shorthands.overflow('hidden'),
    textDecoration: 'none',
    color: 'inherit',
    transitionProperty: 'transform, box-shadow, border-color',
    transitionDuration: '200ms',
    ':hover': {
      transform: 'translateY(-3px)',
      boxShadow:
        '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(139,92,246,0.4)',
    },
    '@media (max-width: 720px)': {
      gridTemplateColumns: '1fr',
    },
  },
  featuredGlow: {
    position: 'absolute',
    top: '-50%',
    right: '-20%',
    width: '60%',
    height: '200%',
    backgroundImage:
      'radial-gradient(closest-side, rgba(34,211,238,0.35), transparent 70%)',
    pointerEvents: 'none',
    filter: 'blur(20px)',
  },
  featuredLeft: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    rowGap: '16px',
  },
  featuredEyebrow: {
    fontFamily: `'Cascadia Code', 'Fira Code', ui-monospace, monospace`,
    fontSize: '11px',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: '#22d3ee',
  },
  featuredTitle: {
    fontSize: 'clamp(26px, 3.4vw, 40px)',
    fontWeight: 700,
    lineHeight: 1.15,
    letterSpacing: '-0.02em',
    marginTop: '8px',
    marginRight: '0',
    marginBottom: '12px',
    marginLeft: '0',
  },
  featuredExcerpt: {
    color: tokens.colorNeutralForeground2,
    fontSize: '15px',
    lineHeight: 1.6,
  },
  featuredMeta: {
    display: 'flex',
    alignItems: 'center',
    columnGap: '10px',
    rowGap: '8px',
    flexWrap: 'wrap',
    marginTop: '4px',
  },
  featuredCta: {
    display: 'inline-flex',
    alignItems: 'center',
    columnGap: '8px',
    fontWeight: 600,
    color: '#a78bfa',
    marginTop: '8px',
  },
  featuredRight: {
    position: 'relative',
    zIndex: 1,
    minHeight: '220px',
    borderRadius: '14px',
    backgroundImage:
      'linear-gradient(135deg, rgba(139,92,246,0.45), rgba(34,211,238,0.25) 60%, rgba(244,114,182,0.35))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '76px',
    fontWeight: 800,
    letterSpacing: '-2px',
    color: 'rgba(255,255,255,0.92)',
    textShadow: '0 4px 24px rgba(0,0,0,0.35)',
    ...shorthands.overflow('hidden'),
  },
  featuredRightScan: {
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
    ...shorthands.border('1px', 'dashed', 'rgba(255,255,255,0.12)'),
    borderRadius: '12px',
  },
});

// Keyframes injected globally (Griffel doesn't support @keyframes inline)
const styleTag = document.getElementById('fp-keyframes');
if (!styleTag) {
  const el = document.createElement('style');
  el.id = 'fp-keyframes';
  el.textContent = `
    @keyframes pulseDot {
      0%, 100% { transform: scale(1); opacity: 1; }
      50%      { transform: scale(1.35); opacity: 0.7; }
    }
  `;
  document.head.appendChild(el);
}

function initials(title: string): string {
  const words = title.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return '?';
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

export function HomePage() {
  const styles = useStyles();
  const [featured, ...rest] = posts;

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          <span>// frontier.log — online</span>
        </div>
        <h1 className={styles.heroTitle}>
          <span className={styles.gradient}>Dispatches</span>
          <br />
          from the frontier.
        </h1>
        <Body1 as="p" block className={styles.tagline}>
          Ben and Daniel. Azure Virtual Desktop, Windows 365, modern management,
          and AI agents — with the scripts, the fixes, and the lessons the docs
          leave out.
        </Body1>
        <span className={styles.taglineMono}>
          $ break it in a lab → figure out why → hand you the working answer
        </span>
      </section>

      {featured && (
        <>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>// featured</span>
            <span className={styles.sectionRule} />
          </div>
          <Link to={`/posts/${featured.slug}`} className={styles.featured}>
            <div className={styles.featuredGlow} />
            <div className={styles.featuredLeft}>
              <div>
                <div className={styles.featuredEyebrow}>Latest dispatch</div>
                <h2 className={styles.featuredTitle}>{featured.title}</h2>
                {featured.excerpt && (
                  <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
                )}
              </div>
              <div>
                <div className={styles.featuredMeta}>
                  <Caption1>
                    {new Date(featured.date).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                    {featured.author ? ` · ${featured.author}` : ''}
                  </Caption1>
                  {featured.tags?.map((tag) => (
                    <Tag key={tag} size="extra-small" appearance="brand">
                      {tag}
                    </Tag>
                  ))}
                </div>
                <span className={styles.featuredCta}>
                  Read the dispatch <ArrowRight24Regular />
                </span>
              </div>
            </div>
            <div className={styles.featuredRight}>
              {featured.cover ? (
                <img
                  src={featured.cover}
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <>
                  <span>{initials(featured.title)}</span>
                  <span className={styles.featuredRightScan} />
                </>
              )}
            </div>
          </Link>
        </>
      )}

      {rest.length > 0 && (
        <>
          <div className={mergeClasses(styles.sectionHeader)}>
            <span className={styles.sectionLabel}>// archive</span>
            <span className={styles.sectionRule} />
          </div>
          <div className={styles.grid}>
            {rest.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </>
      )}

      {posts.length === 0 && (
        <div className={styles.empty}>
          <Title2 as="h2" block>
            No posts yet.
          </Title2>
          <Body1 as="p" block style={{ marginTop: 8 }}>
            Drop a markdown file into <code>/posts</code> to get started.
          </Body1>
        </div>
      )}
    </>
  );
}

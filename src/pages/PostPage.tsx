import { useNavigate, useParams } from 'react-router-dom';
import {
  LargeTitle,
  Body1,
  Caption1,
  Tag,
  Button,
  makeStyles,
  shorthands,
  tokens,
} from '@fluentui/react-components';
import { ArrowLeft24Regular } from '@fluentui/react-icons';
import { getPost } from '../posts';
import { Markdown } from '../components/Markdown';
import { NotFoundPage } from './NotFoundPage';

const useStyles = makeStyles({
  back: {
    marginBottom: '24px',
  },
  header: {
    marginBottom: '32px',
    ...shorthands.borderBottom('1px', 'solid', tokens.colorNeutralStroke2),
    paddingBottom: '20px',
  },
  meta: {
    display: 'flex',
    columnGap: '8px',
    rowGap: '4px',
    flexWrap: 'wrap',
    marginTop: '12px',
    alignItems: 'center',
  },
  tags: {
    display: 'flex',
    columnGap: '6px',
    flexWrap: 'wrap',
    marginLeft: '8px',
  },
  cover: {
    width: '100%',
    maxHeight: '360px',
    objectFit: 'cover',
    ...shorthands.borderRadius(tokens.borderRadiusLarge),
    marginBottom: '24px',
  },
});

export function PostPage() {
  const styles = useStyles();
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? getPost(slug) : undefined;

  if (!post) {
    return <NotFoundPage />;
  }

  const dateStr = new Date(post.date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article>
      <Button
        appearance="subtle"
        icon={<ArrowLeft24Regular />}
        className={styles.back}
        onClick={() => navigate('/')}
      >
        All posts
      </Button>

      {post.cover && <img src={post.cover} alt="" className={styles.cover} />}

      <header className={styles.header}>
        <LargeTitle as="h1" block>
          {post.title}
        </LargeTitle>
        <div className={styles.meta}>
          <Caption1>
            {dateStr}
            {post.author ? ` · ${post.author}` : ''}
          </Caption1>
          {post.tags && post.tags.length > 0 && (
            <div className={styles.tags}>
              {post.tags.map((t) => (
                <Tag key={t} size="small" appearance="brand">
                  {t}
                </Tag>
              ))}
            </div>
          )}
        </div>
        {post.excerpt && (
          <Body1 as="p" block style={{ marginTop: 16, color: tokens.colorNeutralForeground2 }}>
            {post.excerpt}
          </Body1>
        )}
      </header>

      <Markdown>{post.content}</Markdown>
    </article>
  );
}

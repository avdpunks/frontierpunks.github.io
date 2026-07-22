import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import {
  Title1,
  Title2,
  Title3,
  Subtitle1,
  Body1,
  makeStyles,
  tokens,
} from '@fluentui/react-components';

const useStyles = makeStyles({
  root: {
    lineHeight: 1.7,
    color: tokens.colorNeutralForeground1,
    fontSize: tokens.fontSizeBase400,
  },
});

interface Props {
  children: string;
}

export function Markdown({ children }: Props) {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          h1: ({ children, ...props }) => (
            <Title1 as="h1" block {...props}>
              {children}
            </Title1>
          ),
          h2: ({ children, ...props }) => (
            <Title2 as="h2" block {...props}>
              {children}
            </Title2>
          ),
          h3: ({ children, ...props }) => (
            <Title3 as="h3" block {...props}>
              {children}
            </Title3>
          ),
          h4: ({ children, ...props }) => (
            <Subtitle1 as="h4" block {...props}>
              {children}
            </Subtitle1>
          ),
          p: ({ children, ...props }) => (
            <Body1 as="p" block {...props}>
              {children}
            </Body1>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}

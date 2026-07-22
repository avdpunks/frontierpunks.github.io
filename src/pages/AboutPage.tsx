import {
  LargeTitle,
  Body1,
  Link as FluentLink,
  makeStyles,
  shorthands,
  tokens,
} from '@fluentui/react-components';

const useStyles = makeStyles({
  root: {
    ...shorthands.padding('24px', '0'),
    maxWidth: '680px',
  },
  para: {
    marginTop: '16px',
    color: tokens.colorNeutralForeground2,
    lineHeight: 1.7,
  },
});

export function AboutPage() {
  const styles = useStyles();
  return (
    <section className={styles.root}>
      <LargeTitle as="h1" block>
        About
      </LargeTitle>
      <Body1 as="p" block className={styles.para}>
        Frontier Punks is a small collective writing about the edges of software,
        systems, and whatever else keeps us up at night.
      </Body1>
      <Body1 as="p" block className={styles.para}>
        This site is a static blog built with{' '}
        <FluentLink href="https://react.dev/" target="_blank" rel="noreferrer">
          React
        </FluentLink>
        ,{' '}
        <FluentLink href="https://vitejs.dev/" target="_blank" rel="noreferrer">
          Vite
        </FluentLink>
        , and{' '}
        <FluentLink
          href="https://react.fluentui.dev/"
          target="_blank"
          rel="noreferrer"
        >
          Fluent UI v9
        </FluentLink>
        . Posts are markdown files in the <code>/posts</code> folder.
      </Body1>
      <Body1 as="p" block className={styles.para}>
        Source lives on{' '}
        <FluentLink
          href="https://github.com/avdpunks/frontierpunks.github.io"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </FluentLink>
        . Pull requests welcome.
      </Body1>
    </section>
  );
}

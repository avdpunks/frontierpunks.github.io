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
        FrontierPunks is Ben and Daniel — the same two dudes behind{' '}
        <FluentLink href="https://avdpunks.com/" target="_blank" rel="noreferrer">
          avdpunks.com
        </FluentLink>
        . Same no-fluff attitude, new home for everything sitting on the edge of
        Azure Virtual Desktop, Windows 365, modern management, and AI agents.
      </Body1>
      <Body1 as="p" block className={styles.para}>
        We write about the stuff the docs don't cover yet: break it in a lab,
        figure out why, and hand you the working answer.
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
        .
      </Body1>
    </section>
  );
}

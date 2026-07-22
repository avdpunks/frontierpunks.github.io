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
        . New home for what's next: AI agents, Computer-Using Agents (CUA),
        Windows 365 for Agents, new Azure services, and everything at the edge
        of enterprise cloud + AI.
      </Body1>
      <Body1 as="p" block className={styles.para}>
        AVD and Windows 365 deep-dives still live on{' '}
        <FluentLink href="https://avdpunks.com/" target="_blank" rel="noreferrer">
          avdpunks.com
        </FluentLink>
        {' '}— nothing there is going anywhere. FrontierPunks is where we cover
        the ground beyond it.
      </Body1>
      <Body1 as="p" block className={styles.para}>
        We write about the stuff the docs don't cover yet: break it in a lab,
        figure out why, and hand you the working answer.
      </Body1>
    </section>
  );
}

import {
  LargeTitle,
  Subtitle2,
  Body1,
  Caption1,
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
  crew: {
    display: 'flex',
    flexWrap: 'wrap',
    columnGap: '32px',
    rowGap: '24px',
    marginTop: '28px',
    marginBottom: '8px',
  },
  member: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: '160px',
  },
  avatarRing: {
    width: '140px',
    height: '140px',
    borderRadius: '50%',
    ...shorthands.overflow('hidden'),
    ...shorthands.border('2px', 'solid', 'rgba(139,92,246,0.55)'),
    boxShadow:
      '0 0 24px rgba(139,92,246,0.35), 0 0 48px rgba(34,211,238,0.18)',
    transitionProperty: 'transform, box-shadow',
    transitionDuration: '250ms',
    ':hover': {
      transform: 'scale(1.04)',
      boxShadow:
        '0 0 32px rgba(139,92,246,0.55), 0 0 64px rgba(34,211,238,0.3)',
    },
  },
  avatarImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  memberName: {
    marginTop: '12px',
  },
  memberRole: {
    color: tokens.colorNeutralForeground3,
    fontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace',
  },
});

export function AboutPage() {
  const styles = useStyles();
  return (
    <section className={styles.root}>
      <LargeTitle as="h1" block>
        About
      </LargeTitle>
      <div className={styles.crew}>
        <div className={styles.member}>
          <div className={styles.avatarRing}>
            <img
              src="/ben.jpg"
              alt="Ben"
              className={styles.avatarImg}
              loading="lazy"
            />
          </div>
          <Subtitle2 as="p" block className={styles.memberName}>
            Ben
          </Subtitle2>
          <Caption1 as="p" block className={styles.memberRole}>
            // co-founder
          </Caption1>
        </div>
        <div className={styles.member}>
          <div className={styles.avatarRing}>
            <img
              src="/daniel.jpg"
              alt="Daniel"
              className={styles.avatarImg}
              loading="lazy"
            />
          </div>
          <Subtitle2 as="p" block className={styles.memberName}>
            Daniel
          </Subtitle2>
          <Caption1 as="p" block className={styles.memberRole}>
            // co-founder
          </Caption1>
        </div>
      </div>
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

import { useNavigate } from 'react-router-dom';
import {
  LargeTitle,
  Body1,
  Button,
  makeStyles,
  shorthands,
  tokens,
} from '@fluentui/react-components';

const useStyles = makeStyles({
  root: {
    ...shorthands.padding('60px', '0'),
    textAlign: 'center',
  },
  sub: {
    marginTop: '12px',
    marginBottom: '24px',
    color: tokens.colorNeutralForeground2,
  },
});

export function NotFoundPage() {
  const styles = useStyles();
  const navigate = useNavigate();
  return (
    <div className={styles.root}>
      <LargeTitle as="h1" block>
        404
      </LargeTitle>
      <Body1 as="p" block className={styles.sub}>
        The page you were looking for drifted off the frontier.
      </Body1>
      <Button appearance="primary" onClick={() => navigate('/')}>
        Back to home
      </Button>
    </div>
  );
}

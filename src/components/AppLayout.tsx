import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  makeStyles,
  shorthands,
  tokens,
  Text,
  Title3,
  Divider,
} from '@fluentui/react-components';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 10,
    backdropFilter: 'saturate(180%) blur(14px)',
    backgroundColor: 'rgba(10, 10, 15, 0.68)',
    ...shorthands.borderBottom('1px', 'solid', 'rgba(255, 255, 255, 0.06)'),
  },
  headerInner: {
    maxWidth: '960px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...shorthands.padding('16px', '24px'),
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    columnGap: '10px',
    textDecoration: 'none',
    color: tokens.colorNeutralForeground1,
  },
  brandMark: {
    width: '28px',
    height: '28px',
    display: 'inline-block',
  },
  nav: {
    display: 'flex',
    columnGap: '20px',
  },
  navLink: {
    textDecoration: 'none',
    color: tokens.colorNeutralForeground2,
    fontWeight: 500,
    ...shorthands.padding('6px', '10px'),
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    ':hover': {
      backgroundColor: tokens.colorSubtleBackgroundHover,
      color: tokens.colorNeutralForeground1,
    },
  },
  navLinkActive: {
    color: tokens.colorNeutralForeground1,
    backgroundColor: tokens.colorSubtleBackgroundSelected,
  },
  main: {
    flexGrow: 1,
    width: '100%',
    maxWidth: '960px',
    marginLeft: 'auto',
    marginRight: 'auto',
    ...shorthands.padding('32px', '24px', '64px'),
  },
  footer: {
    maxWidth: '960px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    ...shorthands.padding('24px'),
    color: tokens.colorNeutralForeground3,
    fontSize: tokens.fontSizeBase200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: '16px',
    flexWrap: 'wrap',
    rowGap: '8px',
  },
  footerLeft: {
    display: 'inline-flex',
    alignItems: 'center',
    columnGap: '8px',
  },
  footerMono: {
    fontFamily: `'Cascadia Code', 'Fira Code', ui-monospace, monospace`,
    color: tokens.colorNeutralForeground3,
  },
});

function BrandMark() {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: 28, height: 28 }}
    >
      <defs>
        <linearGradient id="fp-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <path
        d="M14 46 L14 18 L32 34 L50 18 L50 46"
        stroke="url(#fp-grad)"
        strokeWidth="6"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="32" cy="52" r="3" fill="url(#fp-grad)" />
    </svg>
  );
}

interface Props {
  children: ReactNode;
}

export function AppLayout({ children }: Props) {
  const styles = useStyles();
  const { pathname } = useLocation();

  const navItems: Array<{ to: string; label: string; match: (p: string) => boolean }> = [
    { to: '/', label: 'Home', match: (p) => p === '/' },
    { to: '/about', label: 'About', match: (p) => p.startsWith('/about') },
  ];

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link to="/" className={styles.brand}>
            <BrandMark />
            <Title3>Frontier Punks</Title3>
          </Link>
          <nav className={styles.nav}>
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`${styles.navLink} ${
                  item.match(pathname) ? styles.navLinkActive : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className={styles.main}>{children}</main>

      <Divider />
      <footer className={styles.footer}>
        <span className={styles.footerLeft}>
          <Text>© {new Date().getFullYear()} Frontier Punks</Text>
        </span>
        <Text className={styles.footerMono}>
          // built with React + Fluent UI · deployed on GitHub Pages
        </Text>
      </footer>
    </div>
  );
}

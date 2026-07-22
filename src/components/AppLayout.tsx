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
    width: '36px',
    height: '36px',
    display: 'inline-block',
    borderRadius: '50%',
    ...shorthands.border('2px', 'solid', 'rgba(139, 92, 246, 0.55)'),
    objectFit: 'cover',
    imageRendering: 'pixelated',
    backgroundColor: '#ffffff',
    boxShadow:
      '0 0 12px rgba(139, 92, 246, 0.35), 0 0 24px rgba(34, 211, 238, 0.18)',
    transitionProperty: 'transform, box-shadow',
    transitionDuration: '200ms',
    ':hover': {
      transform: 'scale(1.06) rotate(-2deg)',
      boxShadow:
        '0 0 16px rgba(139, 92, 246, 0.55), 0 0 32px rgba(34, 211, 238, 0.3)',
    },
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

function BrandMark({ className }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="FrontierPunks mascot"
      className={className}
      width={36}
      height={36}
      draggable={false}
    />
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
            <BrandMark className={styles.brandMark} />
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

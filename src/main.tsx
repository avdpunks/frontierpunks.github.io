// Provide the `Buffer` global that gray-matter expects when running in a browser.
import { Buffer } from 'buffer';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).Buffer ||= Buffer;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { FluentProvider, webDarkTheme } from '@fluentui/react-components';
import { App } from './App';
import './index.css';
import 'highlight.js/styles/github-dark.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FluentProvider theme={webDarkTheme} style={{ minHeight: '100vh' }}>
      <HashRouter>
        <App />
      </HashRouter>
    </FluentProvider>
  </React.StrictMode>,
);

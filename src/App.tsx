import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { HomePage } from './pages/HomePage';
import { PostPage } from './pages/PostPage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:slug" element={<PostPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppLayout>
  );
}

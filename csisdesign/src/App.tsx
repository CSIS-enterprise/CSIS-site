import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { LandingPage } from './pages/LandingPage';
import { BlogList } from './pages/BlogList';
import { ArticlePage } from './pages/ArticlePage';

export function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-white font-sans selection:bg-brand-blue selection:text-white flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/*" element={<ArticlePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}
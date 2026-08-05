import React from 'react';
import type { RouteRecord } from 'vite-react-ssg';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { FamilyWorshipPage } from './pages/FamilyWorshipPage';
import { Footer } from './components/Footer';

const Layout = () => (
  <div className="min-h-screen bg-charcoal-950 text-cream font-sans selection:bg-gold/30 selection:text-gold overflow-x-hidden">
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'family-worship-assistant',
        element: <FamilyWorshipPage />,
      }
    ]
  }
];
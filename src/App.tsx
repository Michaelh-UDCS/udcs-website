import React from 'react';
import type { RouteRecord } from 'vite-react-ssg';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { FamilyWorshipPage } from './pages/FamilyWorshipPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { LakeJacksonPage } from './pages/LakeJacksonPage';
import { ThankYouPage } from './pages/ThankYouPage';
import { NotFoundPage } from './pages/NotFoundPage';
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
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'privacy-policy',
        element: <PrivacyPolicyPage />,
      },
      {
        path: 'terms-of-service',
        element: <TermsOfServicePage />,
      },
      {
        path: 'services/lake-jackson-tx',
        element: <LakeJacksonPage />,
      },
      {
        path: 'thank-you',
        element: <ThankYouPage />,
      },
      {
        path: '404',
        element: <NotFoundPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      }
    ]
  }
];
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Resets window scroll position when the route pathname changes. */
export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

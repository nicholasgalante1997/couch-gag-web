import React from 'react';
import { createRoot } from 'react-dom/client';
import { LandingPage } from '@/pages';
import '../styles/index.css'
import '../styles/landing-page.css';

createRoot(document.getElementById('evergreen-terrace')!).render(<LandingPage />);

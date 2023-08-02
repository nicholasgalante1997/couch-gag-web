import '../styles/index.css';
import '../styles/browse.css';
import { BrowsePage } from '@/pages';
import React from 'react';
import { createRoot } from 'react-dom/client';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('evergreen-terrace')!).render(<BrowsePage />);

import 'heller-2-lite/css/variables.css';
import 'heller-2-lite/css/base.min.css';
import 'heller-2-lite/css/button.min.css';
import 'heller-2-lite/css/typography.min.css';

import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { inject } from '@vercel/analytics';
import { DOCUMENT_ROOT_ID } from '@/config/client';
import { LandingPage } from '@/pages';


function mount(): void {
  let mountingEl = document.getElementById(DOCUMENT_ROOT_ID);
  if (mountingEl == null) {
    mountingEl = document.createElement('div');
    mountingEl.id = DOCUMENT_ROOT_ID;
    document.body.appendChild(mountingEl);
  }
  hydrateRoot(mountingEl, <LandingPage />);
}

if (process.env.NODE_ENV === 'production') {
  inject({ mode: 'production' });
}

mount();

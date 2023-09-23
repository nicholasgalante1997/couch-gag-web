import { ContributePage } from '@/pages';
import { DOCUMENT_ROOT_ID } from '@/config/client';
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { inject } from '@vercel/analytics';

function mount(): void {
  let mountingEl = document.getElementById(DOCUMENT_ROOT_ID);
  if (mountingEl == null) {
    mountingEl = document.createElement('div');
    mountingEl.id = DOCUMENT_ROOT_ID;
    document.body.appendChild(mountingEl);
  }
  hydrateRoot(mountingEl, <ContributePage />);
}

if (process.env.NODE_ENV === 'production') {
  inject({ mode: 'production' });
}

mount();

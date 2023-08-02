import { DOCUMENT_ROOT_ID } from '@/config/client';
import { LandingPage } from '@/pages';
import React from 'react';
import { hydrateRoot } from 'react-dom/client';

function mount(): void {
  let mountingEl = document.getElementById(DOCUMENT_ROOT_ID);
  if (mountingEl == null) {
    mountingEl = document.createElement('div');
    mountingEl.id = DOCUMENT_ROOT_ID;
    document.body.appendChild(mountingEl);
  }
  hydrateRoot(mountingEl, <LandingPage />);
}

mount();

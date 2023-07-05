import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { DOCUMENT_ROOT_ID } from '@/config';
import { LandingPage } from '@/pages';

function mount() {
  let mountingEl = document.getElementById(DOCUMENT_ROOT_ID);
  if (!mountingEl) {
    mountingEl = document.createElement('div');
    mountingEl.id = DOCUMENT_ROOT_ID;
    document.body.appendChild(mountingEl);
  }
  hydrateRoot(mountingEl, <LandingPage />);
}

mount();

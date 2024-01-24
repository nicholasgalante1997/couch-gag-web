import React from 'react';
import { hydrateRoot } from 'react-dom/client';

import { inject } from '@vercel/analytics';

import { DOCUMENT_ROOT_ID } from '@/config/client';
import { setupAnalytics } from './web-vitals';

function mount<P extends React.JSX.IntrinsicAttributes>(
  Component: React.ComponentType<P>,
  props: P = {} as any
): void {
  let mountingEl = document.getElementById(DOCUMENT_ROOT_ID);

  if (mountingEl == null) {
    mountingEl = document.createElement('div');
    mountingEl.id = DOCUMENT_ROOT_ID;
    document.body.appendChild(mountingEl);
  }

  hydrateRoot(mountingEl, <Component {...props} />);

  if (process.env.NODE_ENV === 'production') {
    inject({ mode: 'production' });
    setupAnalytics();
  }
}

export { mount };

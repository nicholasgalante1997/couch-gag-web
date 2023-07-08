import React from 'react';
import { PageConfig } from '@/types';
import { LandingPage } from '@/pages';

export const pages: PageConfig[] = [
  {
    bundle: 'landing',
    component: LandingPage,
    title: 'The Couch Gag, A Collection Of Short Stories',
    description: 'An anthology of short stories by new American authors. We are currently accepting submissions for our first season\'s release.',
    htmlFileName: 'index',
    styles: ['landing-page'],
  },
];

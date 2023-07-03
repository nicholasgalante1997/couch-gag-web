import React from 'react';
import { PageConfig } from '@/types';
import { LandingPage } from '@/pages';

export const pages: PageConfig[] = [
    {
        bundle: 'landing',
        component: LandingPage,
        title: 'The Couch Gag, A Collection Of Short Stories',
        htmlFileName: 'index',
        styles: ['landing-page']
    }
];
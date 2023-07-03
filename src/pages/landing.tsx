import React, { memo } from 'react';
import { Hero } from '@/components';
import { withProfiler } from '@/hocs';

function LandingPageComponent() {
    return (
        <Hero />
    );
}

export const LandingPage = withProfiler(
    'LandingPage',
    memo(LandingPageComponent)
);

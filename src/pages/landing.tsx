import React, { memo } from 'react';
import { Hero } from '@/components';
import { withProfiler, withRootProviders } from '@/hocs';
import { combine } from '@/utils';

function LandingPageComponent() {
    return (
        <Hero />
    );
}

export const LandingPage = combine(
    [withProfiler, withRootProviders],
    memo(LandingPageComponent),
    'landing-page'
);
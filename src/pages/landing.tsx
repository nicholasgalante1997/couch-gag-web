import { ContributeBanner, Hero, SubscribeBanner } from '@/components';
import React, { memo } from 'react';
import { combine, withProfiler, withRootProviders } from '@/hocs';

function LandingPageComponent(): JSX.Element {
  return (
    <React.Fragment>
      <Hero />
      <SubscribeBanner />
      <ContributeBanner />
    </React.Fragment>
  );
}

export const LandingPage = combine(
  [withRootProviders, withProfiler],
  memo(LandingPageComponent),
  'landing-page'
);

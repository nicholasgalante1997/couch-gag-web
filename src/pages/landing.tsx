import { ContributeBanner, Hero, SubscribeBanner } from '@/components';
import React, { memo } from 'react';
import { combine, withProfiler, withRootProviders, withRouteGuard } from '@/hocs';

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
  [withRouteGuard('couch-gag-landing-page-route-v0.1'), withRootProviders, withProfiler],
  memo(LandingPageComponent),
  'landing-page'
);

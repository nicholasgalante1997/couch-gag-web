import { ContributeBanner, Hero, ShelfWidget, SubscribeBanner } from '@/components';
import React, { memo } from 'react';
import { combine, withProfiler, withRootProviders, withRouteGuard } from '@/hocs';

function LandingPageComponent(): React.JSX.Element {
  return (
    <React.Fragment>
      <Hero />
      <SubscribeBanner />
      <ContributeBanner />
      <ShelfWidget />
    </React.Fragment>
  );
}

export const LandingPage = combine(
  [withRouteGuard('couch-gag-landing-page-route-v0.1'), withRootProviders, withProfiler],
  memo(LandingPageComponent),
  'landing-page'
);

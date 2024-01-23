import React, { memo } from 'react';
import { Hero, SubscribeBanner } from '@/components';
import { combine, withRootProviders, withRouteGuard } from '@/hocs';

function LandingPageComponent(): React.JSX.Element {
  return (
    <React.Fragment>
      <Hero />
      <SubscribeBanner />
    </React.Fragment>
  );
}

export const LandingPage = combine(
  [withRouteGuard('couch-gag-landing-page-route-v0.1'), withRootProviders],
  memo(LandingPageComponent),
  'landing-page'
);
LandingPage.displayName = 'CouchPage__Landing';

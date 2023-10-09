import { ContributeBanner, Hero, ShelfWidget, SubscribeBanner } from '@/components';
import React, { memo } from 'react';
import { combine, withRootProviders, withRouteGuard } from '@/hocs';
import { CardGrid } from '@/components/CardGrid';

function LandingPageComponent(): React.JSX.Element {
  return (
    <React.Fragment>
      <Hero />
      <SubscribeBanner />
      <CardGrid />
      <ContributeBanner />
      <ShelfWidget />
    </React.Fragment>
  );
}

export const LandingPage = combine(
  [withRouteGuard('couch-gag-landing-page-route-v0.1'), withRootProviders],
  memo(LandingPageComponent),
  'landing-page'
);
LandingPage.displayName = 'CouchPage__Landing';

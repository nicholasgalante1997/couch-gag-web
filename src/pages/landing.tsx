import React, { memo } from 'react';
import { Hero, SubscribeBanner, ContentWidget } from '@/components';
import { withProfiler, withRootProviders } from '@/hocs';
import { combine } from '@/utils';

function LandingPageComponent () {
  return (
    <React.Fragment>
      <Hero />
      <SubscribeBanner />
      <ContentWidget />
    </React.Fragment>
  );
}

export const LandingPage = combine(
  [withProfiler, withRootProviders],
  memo(LandingPageComponent),
  'landing-page'
);

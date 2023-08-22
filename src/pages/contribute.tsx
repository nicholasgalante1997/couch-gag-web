import { ContributeDescription, ContributeHero } from '@/components';
import React, { memo } from 'react';
import { combine, withProfiler, withRootProviders, withRouteGuard } from '@/hocs';

function ContributePageComponent(): React.JSX.Element {
  return (
    <div className="contribute-frame">
      <ContributeHero />
      <ContributeDescription />
    </div>
  );
}

export const ContributePage = combine<React.JSX.IntrinsicAttributes>(
  [withRouteGuard('couch-gag-contribute-story-page-route-v0.1'), withRootProviders, withProfiler],
  memo(ContributePageComponent),
  'couch-gag-contribute-story-page-route-v0.1'
);

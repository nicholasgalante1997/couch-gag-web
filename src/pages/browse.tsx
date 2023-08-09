import React, { memo } from 'react';
import { combine, withProfiler, withRootProviders, withRouteGuard } from '@/hocs';
import { Browse } from '@/components/Browse';

function BrowsePageComponent(): React.JSX.Element {
  return (
    <div className="browse__frame">
      <Browse />
    </div>
  );
}

export const BrowsePage = combine(
  [withRouteGuard('couch-gag-browse-page-route-v0.1'), withRootProviders, withProfiler],
  memo(BrowsePageComponent),
  'browse-page'
);

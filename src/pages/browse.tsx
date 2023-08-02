import React, { memo } from 'react';
import { combine, withProfiler, withRootProviders } from '@/hocs';
import { Browse } from '@/components/Browse';

function BrowsePageComponent(): React.JSX.Element {
  return (
    <div className="browse__frame">
      <Browse />
    </div>
  );
}

export const BrowsePage = combine(
  [withRootProviders, withProfiler],
  memo(BrowsePageComponent),
  'browse-page'
);

import React, { memo } from 'react';
import { withProfiler, withRootProviders } from '@/hocs';
import { combine } from '@/utils';

function SubscribePageComponent() {
  return (
    <React.Fragment>
    </React.Fragment>
  );
}

export const SubscribePage = combine(
  [withProfiler, withRootProviders],
  memo(SubscribePageComponent),
  'subscribe-page'
);

import React, { memo } from 'react';
import { withProfiler, withRootProviders, combine } from '@/hocs';

function SubscribePageComponent (): React.JSX.Element {
  return <React.Fragment></React.Fragment>;
}

export const SubscribePage = combine(
  [withProfiler, withRootProviders],
  memo(SubscribePageComponent),
  'subscribe-page'
);

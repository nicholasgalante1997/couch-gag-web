import React, { memo } from 'react';
import { combine, withProfiler, withRootProviders } from '@/hocs';

function SubscribePageComponent(): React.JSX.Element {
  return <React.Fragment></React.Fragment>;
}

export const SubscribePage = combine(
  [withProfiler, withRootProviders],
  memo(SubscribePageComponent),
  'subscribe-page'
);

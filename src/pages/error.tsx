import React, { memo } from 'react';
import { combine, withProfiler, withRootProviders, withRouteGuard } from '@/hocs';
import { ErrorCode } from '@/components';

function ErrorPageComponent(): React.JSX.Element {
  return <ErrorCode code={404} />;
}

export const ErrorPage = combine(
  [withRouteGuard('couch-gag-error-page-route-v0.1'), withRootProviders, withProfiler],
  memo(ErrorPageComponent),
  'couch-gag-error-page-component'
);

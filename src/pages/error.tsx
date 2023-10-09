import React, { memo } from 'react';
import { combine, withRootProviders, withRouteGuard } from '@/hocs';
import { ErrorCode } from '@/components';

function ErrorPageComponent(): React.JSX.Element {
  return <ErrorCode code={404} />;
}

export const ErrorPage = combine(
  [withRouteGuard('couch-gag-error-page-route-v0.1'), withRootProviders],
  memo(ErrorPageComponent),
  'couch-gag-error-page-component'
);
ErrorPage.displayName = 'CouchPage__Error';

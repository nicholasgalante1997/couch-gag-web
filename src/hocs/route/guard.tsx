import { type RouteKey, RouteKeyMap } from '@/config/routes';
import { isServer, logger } from '@/utils';
import { ErrorCode } from '@/components';
import { type HOCWrapperFn } from '../index';
import React from 'react';
import { type RuntimeStage } from '@/config/client';

export function withRouteGuard<P = {} & JSX.IntrinsicAttributes>(routeKey: RouteKey): HOCWrapperFn<P> {
  logger.info('Invoking "withRouteGuard" higher order function');
  const kvArrayOrUndefined = Object.entries(RouteKeyMap).find(([_key, obj]) => {
    return obj.key === routeKey;
  });
  let canRenderRoute = false;
  const environment = process.env.RUNTIME_STAGE as RuntimeStage | undefined;
  if (kvArrayOrUndefined && environment) {
    const [, { environments }] = kvArrayOrUndefined;
    const stage = environments[environment];
    canRenderRoute = stage === 'public';
  }
  /** The page is public */
  if (isServer() || canRenderRoute) {
    logger.info('the page is public');
    return function (_id: string, Component: React.FC<P>) {
      // eslint-disable-next-line react/display-name
      return function (props: P) {
        return <Component {...(props as P & JSX.IntrinsicAttributes)} />;
      };
    };
  } else {
    /** The page is protected */
    logger.info('the page is protected');
    return function (id: string, _Component: React.FC<P>) {
      // eslint-disable-next-line react/display-name
      return function (props: P) {
        return <ErrorCode code={401} id={id} error='ProtectedRoute' />;
      };
    };
  }
}

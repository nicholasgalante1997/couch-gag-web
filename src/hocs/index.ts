import { type ErrorBoundaryProps } from './error';
import type React from 'react';

export function combine<P = ErrorBoundaryProps & {} & JSX.IntrinsicAttributes>(
  wrappers: Array<(id: string, Component: React.FC<P>) => React.FC<P>>,
  Component: React.FC<P>,
  id: string
): React.FC<P> {
  let WrappedComponent = Component;
  for (const wrapper of wrappers) {
    WrappedComponent = wrapper(id, WrappedComponent);
  }
  return WrappedComponent;
}

export * from './profiler';
export * from './root';
export * from './error';

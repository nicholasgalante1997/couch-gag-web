import React from 'react';

export function combine<P = {} & JSX.IntrinsicAttributes>(
  wrappers: ((id: string, Component: React.FC<P>) => React.FC<P>)[],
  Component: React.FC<P>,
  id: string
) {
  let WrappedComponent = Component;
  for (const wrapper of wrappers) {
    WrappedComponent = wrapper(id, WrappedComponent);
  }
  return WrappedComponent;
}

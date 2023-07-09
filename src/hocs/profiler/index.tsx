import React, { Profiler, type ProfilerOnRenderCallback } from 'react';
import { logger } from '@/utils';

const onRender: ProfilerOnRenderCallback = (id, ...args) => {
  if (process.env.NODE_ENV === 'profiling') {
    logger.info({ id, ...args });
  }
};

export function withProfiler<P = any> (id: string, Component: React.FC<P>): React.FC<P> {
  if (process.env.NODE_ENV === 'production') {
    return Component;
  }
  return function (props: P) {
    return (
      <Profiler id={id} onRender={onRender}>
        <Component {...(props as JSX.IntrinsicAttributes & P)} />
      </Profiler>
    );
  };
}

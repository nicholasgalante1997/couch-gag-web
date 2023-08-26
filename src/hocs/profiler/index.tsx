import type React from 'react';
import { logger } from '@/utils';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const onRender = (id, ...args): void => {
  if (process.env.NODE_ENV === 'profiling') {
    logger.info({ id, ...args });
  }
};

export function withProfiler<P = any>(id: string, Component: React.FC<P>): React.FC<P> {
  // if (process.env.NODE_ENV !== 'profiling') {
  //   return Component;
  // }
  // // eslint-disable-next-line react/display-name
  // return function (props: P) {
  //   return (
  //     <Profiler id={id} onRender={onRender}>
  //       <Component {...(props as JSX.IntrinsicAttributes & P)} />
  //     </Profiler>
  //   );
  // };
  return Component;
}

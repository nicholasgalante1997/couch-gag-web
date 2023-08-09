import React, { memo } from 'react';
import { combine, withProfiler } from '@/hocs';
import { FourZeroOneComponentClassNames } from './classnames';

function FourZeroOneErrorComponent(): React.JSX.Element | React.ReactNode {
  return (
    <div className={FourZeroOneComponentClassNames.Wrapper}>
    <div className={FourZeroOneComponentClassNames.ContentBox}>
        <span className={FourZeroOneComponentClassNames.ErrorCode}></span>
        <div></div>
        <span></span>
    </div>
    </div>
  );
}

export const FourZeroOneError = combine(
  [withProfiler],
  memo(FourZeroOneErrorComponent),
  '401-unauthorized-exception-component'
);

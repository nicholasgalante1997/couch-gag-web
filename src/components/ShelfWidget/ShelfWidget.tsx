import React, { memo } from 'react';
import { combine, withProfiler } from '@/hocs';
import { ShelfWidgetClassNames } from './classnames';

function ShelfWidgetComponent(): React.JSX.Element {
  return (
    <div className={ShelfWidgetClassNames.Wrapper}>
      <div className="shelf-widget__animation-section"></div>
      <div className="shelf-widget__create-shelf-container"></div>
    </div>
  );
}

export const ShelfWidget = combine([withProfiler], memo(ShelfWidgetComponent), 'lp-shelf-widget');

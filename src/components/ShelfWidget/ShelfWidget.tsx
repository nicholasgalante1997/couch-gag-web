import React, { memo } from 'react';
import { combine, withProfiler } from '@/hocs';
import { ShelfWidgetClassNames } from './classnames';

function ShelfWidgetComponent(): React.JSX.Element {
  return (
    <div className={ShelfWidgetClassNames.Wrapper}>
      <div className={ShelfWidgetClassNames.CreateSection}>
        <h1>Do you have a shelf here?</h1>
        <p>
          It's a place where you can keep your favorite stories, share your thoughts on different pieces, and
          direct friends to, to see all that you've done. Set up is way easier than Ikea would have you
          believe.
        </p>
        <button className="button-smpl">Create A Shelf</button>
      </div>
    </div>
  );
}

export const ShelfWidget = combine([withProfiler], memo(ShelfWidgetComponent), 'lp-shelf-widget');

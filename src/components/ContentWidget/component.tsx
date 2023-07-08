import React, { memo } from 'react';
import { withErrorWrapper, withProfiler } from '@/hocs';
import { combine } from '@/utils';
import { useWritContext } from '@/contexts';

function ContentWidgetComponent() {
  const { getAll } = useWritContext();
  return (
    <div className="content__parent-grid">
      <div className="content__left-sect">
        <div className="content__left-sect-card-wrapper">
          <div className="content__left-sect-card-image-wrapper">
            <img />
          </div>
          <div className="content__left-sect-card-wrapper">
            <h5></h5>
          </div>
        </div>
      </div>
      <div className="content__center-sect"></div>
      <div className="content__right-sect"></div>
    </div>
  );
}

export const ContentWidget = combine(
  [withErrorWrapper, withProfiler],
  memo(ContentWidgetComponent),
  'content-widget'
);

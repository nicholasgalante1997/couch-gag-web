import React, { memo, useMemo } from 'react';
import { withErrorWrapper, withProfiler } from '@/hocs';
import { combine } from '@/utils';
import { useWritContext } from '@/contexts';

function ContentWidgetComponent () {
  const { getOne } = useWritContext();

  const storyCardOneJsx = useMemo(() => {
    const storyCardOne = getOne('key', '0102');
    if (storyCardOne == null) {
      return null;
    }
    return (
      <div className="content__left-sect-card-wrapper">
        <div className="content__left-sect-card-image-wrapper">
          <img />
        </div>
        <div className="content__left-sect-card-body-wrapper">
          <h5></h5>
        </div>
      </div>
    );
  }, []);
  return (
    <div className="content__parent-grid">
      <div className="content__left-sect"></div>
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

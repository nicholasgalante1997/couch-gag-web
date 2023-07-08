import React, { memo } from 'react';
import { Story, StoryProps } from '@/components';
import { withProfiler, withRootProviders } from '@/hocs';
import { combine } from '@/utils';

function StoryComponent(props: StoryProps) {
  return (
    <React.Fragment>
      <Story {...props} />
    </React.Fragment>
  );
}

export const StoryPage = combine<StoryProps>(
  [withProfiler, withRootProviders],
  memo(StoryComponent),
  'story-page'
);

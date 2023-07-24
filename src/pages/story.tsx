import React, { memo } from 'react';
import { Story, type StoryProps } from '@/components';
import { withProfiler, withRootProviders, combine } from '@/hocs';

function StoryComponent (props: StoryProps): React.JSX.Element {
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

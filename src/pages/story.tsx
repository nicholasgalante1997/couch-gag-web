import React, { memo } from 'react';
import { Story, type StoryProps } from '@/components';
import { combine, withProfiler, withRootProviders } from '@/hocs';

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

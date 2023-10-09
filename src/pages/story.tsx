import React, { memo } from 'react';
import { Story, type StoryProps } from '@/components';
import { combine, withRootProviders, withRouteGuard } from '@/hocs';

function StoryComponent(props: StoryProps): React.JSX.Element {
  return (
    <React.Fragment>
      <Story {...props} />
    </React.Fragment>
  );
}

export const StoryPage = combine<StoryProps>(
  [withRouteGuard('couch-gag-story-page-route-v0.1'), withRootProviders],
  memo(StoryComponent),
  'story-page'
);
StoryPage.displayName = 'CouchPage__Story'

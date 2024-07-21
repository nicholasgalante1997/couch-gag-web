import React, { memo } from 'react';
import { Story, type StoryProps } from '@/components';
import { Document } from '@/components/Document';

function StoryPage(props: StoryProps): React.JSX.Element {
  return (
    <Document
    routeKey='couch-gag-story-page-route-v0.1'
    styles={[<link rel='stylesheet' href="/story.css" />]}
      pageCtx={{ document: { description: props.description, title: props.title }, id: 'story-page'}}
    >
      <Story {...props} />
    </Document>
  );
}

// export const StoryPage = combine<StoryProps>(
//   [withRouteGuard('couch-gag-story-page-route-v0.1'), withRootProviders],
//   memo(StoryComponent),
//   'story-page'
// );

StoryPage.displayName = 'CouchPage__Story';

export default memo(StoryPage);
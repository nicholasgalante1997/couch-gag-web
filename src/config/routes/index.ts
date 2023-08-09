const RouteKeyMapVersion = 0.1;

export const RouteKeyMap = {
  AboutPage: {
    key: `couch-gag-about-anchor-page-route-v${RouteKeyMapVersion}`,
    environments: {
      development: 'public',
      beta: 'public',
      gamma: 'public',
      production: 'private'
    }
  },
  BrowsePage: {
    key: `couch-gag-browse-page-route-v${RouteKeyMapVersion}`,
    environments: {
      development: 'public',
      beta: 'public',
      gamma: 'public',
      production: 'private'
    }
  },
  ContributePage: {
    key: `couch-gag-contribute-story-page-route-v${RouteKeyMapVersion}`,
    environments: {
      development: 'public',
      beta: 'public',
      gamma: 'public',
      production: 'private'
    }
  },
  LandingPage: {
    key: `couch-gag-landing-page-route-v${RouteKeyMapVersion}`,
    environments: {
      development: 'public',
      beta: 'public',
      gamma: 'public',
      production: 'private'
    }
  },
  StoryPage: {
    key: `couch-gag-story-page-route-v${RouteKeyMapVersion}`,
    environments: {
      development: 'public',
      beta: 'public',
      gamma: 'public',
      production: 'private'
    }
  }
} as const;

export type RouteKey = (typeof RouteKeyMap)[keyof typeof RouteKeyMap]['key'];

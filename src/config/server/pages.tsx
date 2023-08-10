import { BrowsePage, ErrorPage, LandingPage, StoryPage } from '@/pages';
import { type PageConfig } from '@/types';
import { type StoryProps } from '@/components';
import frontmatter from 'front-matter';
import fs from 'fs';
import { logger } from '@/utils';
import path from 'path';

function buildDescription(d: string): string {
  /** impl story description injection schema */
  return d;
}

function buildStories(): Array<PageConfig<StoryProps>> {
  try {
    const configs: Array<PageConfig<StoryProps>> = [];
    const storiesDir = path.resolve(process.cwd(), 'writ');
    const storiesDirContents = fs.readdirSync(storiesDir, { encoding: 'utf-8' });
    for (const dir of storiesDirContents) {
      const newDirPath = path.resolve(storiesDir, dir);
      const stories = fs.readdirSync(newDirPath, { encoding: 'utf-8' });
      for (const storyFile of stories) {
        const storyString = fs.readFileSync(path.resolve(newDirPath, storyFile), { encoding: 'utf-8' });
        const formattedStory = frontmatter<any>(storyString);
        const { attributes, body } = formattedStory;
        const storyProps: StoryProps = {
          author: attributes?.author,
          content: body,
          description: attributes?.subtitle,
          genres: attributes?.genres,
          imgAlt: attributes?.subtitle,
          imgSrc: attributes?.img,
          title: attributes?.title
        };
        configs.push({
          bundle: attributes?.slug,
          component: StoryPage,
          description: buildDescription(attributes?.subtitle),
          htmlFileName: attributes?.slug,
          styles: ['story'],
          title: attributes?.title,
          props: storyProps
        });
      }
    }
    return configs;
  } catch (e: any) {
    throw new Error('DynamicPageConfigurationException', { cause: e });
  }
}

export const staticPages: Array<PageConfig<any>> = [
  {
    bundle: 'landing',
    component: LandingPage,
    title: 'The Couch Gag, A Collection Of Short Stories',
    description:
      "An anthology of short stories by new American authors. We are currently accepting submissions for our first season's release.",
    htmlFileName: 'index',
    styles: ['landing-page']
  },
  {
    bundle: 'browse',
    component: BrowsePage,
    title: 'The Couch Gag, Browse Stories',
    description: 'Search for stories contained within "The Couch Gag" seasons\'s 1 and 2.',
    htmlFileName: 'browse',
    styles: ['browse']
  },
  {
    bundle: 'error',
    component: ErrorPage,
    title: 'The Couch Gag, 404 Page',
    description: 'The Couch Gag fallback page',
    htmlFileName: '404',
    styles: []
  }
];

export const getPages = (): Array<PageConfig<{} | StoryProps>> => {
  try {
    const storyPageConfigs = buildStories();
    return [...storyPageConfigs, ...staticPages];
  } catch (e) {
    logger.error(e);
    throw e;
  }
};

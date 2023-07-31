import { LandingPage } from '@/pages';
import { type PageConfig } from '@/types';
import { type StoryProps } from '@/components';
import fs from 'fs';
import { logger } from '@/utils';
import path from 'path';

function buildStories (): PageConfig[] {
  try {
    const storiesDir = path.resolve(process.cwd(), 'writ');
    const storiesDirContents = fs.readdirSync(storiesDir, { encoding: 'utf-8' });
    logger.info(storiesDirContents);
    return [];
  } catch (e: any) {
    throw new Error();
  }
}

export const staticPages: PageConfig[] = [
  {
    bundle: 'landing',
    component: LandingPage,
    title: 'The Couch Gag, A Collection Of Short Stories',
    description:
      "An anthology of short stories by new American authors. We are currently accepting submissions for our first season's release.",
    htmlFileName: 'index',
    styles: ['landing-page']
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

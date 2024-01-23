import fs from 'fs';
import path from 'path';
import frontmatter from 'front-matter';

import { attempt, logger } from '@/utils';
import { fileTemplate } from './hbs';

void (() => {
  attempt(
    () => buildStoryEntrypoints()
  )
})();

function loadWritDirContents() {
  const storiesDir = path.resolve(process.cwd(), 'writ');
  return fs.readdirSync(storiesDir, { encoding: 'utf-8' });
}

function attemptLoadWritDirContents() {
  const { data, ok, error } = attempt(loadWritDirContents);
  if (data && ok) return data;
  else {
    logger.fatal(error || new Error('UnknownLoadWritDirContentsException'));
    process.exit(2);
  }
}

function attemptLoadStories(subdir: string) {
  const { data, ok, error } = attempt(
    () => fs.readdirSync(subdir, { encoding: 'utf-8' })
  );
  if (data && ok) return data;
  else {
    logger.fatal(error || new Error('UnknownLoadWritDirContentsException'));
    process.exit(2);
  }
}

function iterateThroughWritSubdirectories(directories: string[]) {
  for (const dir of directories) {
    const subdirFullPath = path.resolve(process.cwd(), 'writ', dir);
    const storiesWithinSubdir = attemptLoadStories(subdirFullPath);
    for (const story of storiesWithinSubdir) {
      convertStoryToEntrypoint(story, subdirFullPath);
    }
  }
}

function convertStoryToEntrypoint(story: string, rootPath: string) {
  const { data, ok, error } = attempt(
    () => fs.readFileSync(path.resolve(rootPath, story), { encoding: 'utf-8' })
  );
  
  if (error || !ok || !data) {
    logger.fatal(error || new Error('UnknownLoadWritDirContentsException'));
    process.exit(2);
  }
  
  const { attributes, body } = frontmatter<any>(data);
  const outFilePath = path.resolve(process.cwd(), 'src', 'mounts', `${attributes?.slug as string}.tsx`);
  const file = fileTemplate({
    author: attributes?.author,
    content: body,
    description: attributes?.subtitle,
    imgAlt: attributes?.subtitle,
    imgSrc: attributes?.img,
    title: attributes?.title,
    key: attributes?.key
  });
  
  const { error: wfError, ok: wfOk } = attempt(
    () => fs.writeFileSync(outFilePath, file, { encoding: 'utf-8' })
  );
  
  if (wfError || !wfOk) {
    logger.fatal(wfError);
    process.exit(2);
  }
}

function buildStoryEntrypoints(): void {
  const storiesDirContents = attemptLoadWritDirContents();
  iterateThroughWritSubdirectories(storiesDirContents);
}

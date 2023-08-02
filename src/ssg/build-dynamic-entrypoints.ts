import frontmatter from 'front-matter';
import fs from 'fs';
import handlebars from 'handlebars';
import path from 'path';

const fileTemplate = handlebars.compile(
  `// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT.

import { DOCUMENT_ROOT_ID } from '@/config/client';
import React from 'react';
import { StoryPage } from '@/pages';
import { type StoryProps } from '@/components';
import { hydrateRoot } from 'react-dom/client';
import writMdJson from '@/contexts/data/writ.json';

function mount(): void {
  let mountingEl = document.getElementById(DOCUMENT_ROOT_ID);
  if (mountingEl == null) {
    mountingEl = document.createElement('div');
    mountingEl.id = DOCUMENT_ROOT_ID;
    document.body.appendChild(mountingEl);
  }
  const story = writMdJson.metadata.find(({ key }) => key === '{{ key }}');
  let genres: string[] = [];
  if (story) {
    genres = story.genres;
  }
  const props: StoryProps = {
    author: '{{ author }}',
    content: \`{{ content }}\`,
    description: '{{ description }}',
    genres,
    imgAlt: '{{ imgAlt }}',
    imgSrc: '{{ imgSrc }}',
    title: '{{ title }}'
  };
  hydrateRoot(
    mountingEl,
      <StoryPage {...props} />
  );
}

mount();
  
`
);

function buildStoryEntrypoints(): void {
  try {
    const storiesDir = path.resolve(process.cwd(), 'writ');
    const storiesDirContents = fs.readdirSync(storiesDir, { encoding: 'utf-8' });
    for (const dir of storiesDirContents) {
      const newDirPath = path.resolve(storiesDir, dir);
      const stories = fs.readdirSync(newDirPath, { encoding: 'utf-8' });
      for (const storyFile of stories) {
        const storyString = fs.readFileSync(path.resolve(newDirPath, storyFile), { encoding: 'utf-8' });
        const formattedStory = frontmatter<any>(storyString);
        const { attributes, body } = formattedStory;
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
        fs.writeFileSync(outFilePath, file, { encoding: 'utf-8' });
      }
    }
  } catch (e: any) {
    throw new Error('BuildDynamicEntryPointsException', { cause: e });
  }
}

buildStoryEntrypoints();

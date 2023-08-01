// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT.

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
  const story = writMdJson.metadata.find(({ key }) => key === '0203');
  let genres: string[] = [];
  if (story) {
    genres = story.genres;
  }
  const props: StoryProps = {
    author: 'Washington Irving',
    content: ``,
    description:
      'A local organized crime syndication attempts to elicit a protection payment from a new business that&#x27;s opened up in Somerset, Missouri.',
    genres: genres,
    imgAlt:
      'A local organized crime syndication attempts to elicit a protection payment from a new business that&#x27;s opened up in Somerset, Missouri.',
    imgSrc: 'A Butcher&#x27;s Knife',
    title: 'The Shakedown'
  };
  hydrateRoot(mountingEl, <StoryPage {...props} />);
}

mount();

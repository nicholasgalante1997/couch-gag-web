// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT.

import { DOCUMENT_ROOT_ID } from '@/config/client';
import React from 'react';
import { StoryPage } from '@/pages';
import { type StoryProps } from '@/components';
import { hydrateRoot } from 'react-dom/client';
import { inject } from '@vercel/analytics';
import writMdJson from '@/contexts/data/writ.json';

function mount(): void {
  let mountingEl = document.getElementById(DOCUMENT_ROOT_ID);
  if (mountingEl == null) {
    mountingEl = document.createElement('div');
    mountingEl.id = DOCUMENT_ROOT_ID;
    document.body.appendChild(mountingEl);
  }
  const story = writMdJson.metadata.find(({ key }) => key === '0201');
  let genres: string[] = [];
  if (story) {
    genres = story.genres;
  }
  const props: StoryProps = {
    author: 'Lovecraft, HPV',
    content: `#### The Anorath Before

Anorath was singular and desolate.`,
    description: 'Ripples are created in a black lake that flows out into the ocean.',
    genres,
    imgAlt: 'Ripples are created in a black lake that flows out into the ocean.',
    imgSrc: 'some-lovecraft-image,shoggoth',
    title: 'Treehouse of Horror I: Anorath'
  };
  hydrateRoot(
    mountingEl,
      <StoryPage {...props} />
  );
}

if (process.env.NODE_ENV === 'production') {
  inject({ mode: 'production' });
}

mount();
  

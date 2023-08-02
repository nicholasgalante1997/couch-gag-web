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
  const story = writMdJson.metadata.find(({ key }) => key === '0107');
  let genres: string[] = [];
  if (story) {
    genres = story.genres;
  }
  const props: StoryProps = {
    author: 'Washington Irving',
    content: ``,
    description: 'Poetry in motion',
    genres,
    imgAlt: 'Poetry in motion',
    imgSrc: 'https://www.chicitysports.com/wp-content/uploads/2020/07/the_simpsons_couch_a_l.0.jpg',
    title: 'Blackberry Octane'
  };
  hydrateRoot(
    mountingEl,
      <StoryPage {...props} />
  );
}

mount();
  

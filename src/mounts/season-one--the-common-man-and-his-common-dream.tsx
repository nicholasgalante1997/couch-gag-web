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
  const story = writMdJson.metadata.find(({ key }) => key === '0103');
  let genres: string[] = [];
  if (story) {
    genres = story.genres;
  }
  const props: StoryProps = {
    author: 'Irving Washington',
    content: `#### The Van

The van was described as a huge fucking steal. 
`,
    description: 'Weezer fails to show up to a concert at Nikon Jones Beach Theatre due to hedonism. A new hero sees an opportunity.',
    genres,
    imgAlt: 'Weezer fails to show up to a concert at Nikon Jones Beach Theatre due to hedonism. A new hero sees an opportunity.',
    imgSrc: 'https://www.chicitysports.com/wp-content/uploads/2020/07/the_simpsons_couch_a_l.0.jpg',
    title: 'The Common Man and His Common Dream'
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
  

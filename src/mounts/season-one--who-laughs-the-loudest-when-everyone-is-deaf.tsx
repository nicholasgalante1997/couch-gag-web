// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT.
import { DOCUMENT_ROOT_ID } from '@/config/client';
import React from 'react';
import { StoryPage } from '@/pages';
import { type StoryProps } from '@/components';
import { hydrateRoot } from 'react-dom/client';

function mount(): void {
  let mountingEl = document.getElementById(DOCUMENT_ROOT_ID);
  if (mountingEl == null) {
    mountingEl = document.createElement('div');
    mountingEl.id = DOCUMENT_ROOT_ID;
    document.body.appendChild(mountingEl);
  }
  const props: StoryProps = {
    author: 'Washington Irving',
    content: `#### Himlau, and other things you can scream during Russian Roulette

You can&#x27;t force your artistic perception; your voice. You almost can&#x27;t even listen for it, because its more likely than not to be drowned out by other whispers. What you can do, however, is try and lower your inhibitions enough to be raw, beacuse when you&#x27;re raw you&#x27;ve got a shot at being honest. And if youre honest for long enough, you might even stupidly say something that goes on to be true. This is a story about a writer and his pursuit of his voice.

`,
    description: '',
    genres: [],
    imgAlt: '',
    imgSrc: '',
    title: 'Who laughs the loudest when everyone&#x27;s deaf'
  };
  hydrateRoot(mountingEl, <StoryPage {...props} />);
}

mount();

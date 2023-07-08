import React from 'react';
import { createRoot } from 'react-dom/client';
import { StoryPage } from '@/pages';
import '../styles/index.css';
import '../styles/story.css';
import storyMeta from '../contexts/data/writ.json';

const mockStory = storyMeta.metadata[0];

createRoot(document.getElementById('evergreen-terrace')!).render(
  <StoryPage author={mockStory.author} description={mockStory.subtitle} title={mockStory.title} />
);

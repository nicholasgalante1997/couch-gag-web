import React, { memo } from 'react';
import ReactMarkdown from 'react-markdown';
import { combine } from '@/utils';
import { useTranslation } from '@/contexts';
import { type StoryProps } from './types';
import { withErrorWrapper, withProfiler } from '@/hocs';

function StoryComponent ({ title, description, author, imgAlt, imgSrc, content }: StoryProps) {
  const { t } = useTranslation();
  return (
    <div className="story__wrapper">
      {/* Micro Subscribe Banner */}
      <div className="story__micro-banner">
        <p>{t('story_micro_banner_text')}</p>
        <button className="button-small ml-5">{t('story_micro_banner_subscribe_now')}</button>
        <button className="button-small ml-5">{t('story_micro_banner_dismiss')}</button>
      </div>
      {/** Title */}
      <div className="story_title-container">
        <h1>{title}</h1>
      </div>
      {/** Story Metadata */}
      <div className="story_sub-container">
        <p className="story_description">{description}</p>
        <p className="story_author">{author}</p>
      </div>
      {/** Views, Comments, Shares, Likes, Bookmark */}
      {/** Full Screen Image */}
      <div className="story_image-container">
        <img src={imgSrc} alt={imgAlt} className="story_image" />
      </div>
      {/** Story */}
      <article className="story_content">
        <ReactMarkdown children={content} />
      </article>
    </div>
  );
}

export const Story = combine<StoryProps>(
  [withErrorWrapper, withProfiler],
  memo(StoryComponent),
  'story-component'
);

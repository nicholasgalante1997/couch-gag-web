import React, { memo, useMemo, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { combine, isServer, svgMap } from '@/utils';
import { useTranslation } from '@/contexts';
import { type StoryProps } from './types';
import { withErrorWrapper, withProfiler } from '@/hocs';
import { Chip } from '../Chip/component';

function shadeFromIndex (index: number) {
  if (index % 5 === 0) return 'green';
  if (index % 4 === 0) return 'gold';
  if (index % 3 === 0) return 'red';
  if (index % 2 === 0) return 'orange';
  return 'green';
}

function StoryComponent ({ title, description, author, imgAlt, imgSrc, content, genres }: StoryProps) {
  const likes = 1521; /** Fetch this dynamically */
  const { t } = useTranslation();
  const isBrowser = !isServer();
  const hasAlreadyDismissed: boolean = useMemo(() => {
    if (!isBrowser) return false;
    const lsDismissedString = window.localStorage.getItem('has-dismissed-subscribe-banner');
    if (!lsDismissedString) return false;
    const lsDismissed = JSON.parse(lsDismissedString);
    return lsDismissed.hasDismissed;
  }, [isBrowser])
  const [isDismissed, setIsDismissed] = useState(hasAlreadyDismissed);
  const onDismiss = () => {
    if (isBrowser) {
      setIsDismissed(true);
      window.localStorage.setItem('has-dismissed-subscribe-banner', JSON.stringify({ hasDismissed: true }));
    }
  }
  return (
    <div className="story__wrapper">
      {/* Micro Subscribe Banner */}
      {!isDismissed && (
        <div className="story__micro-banner">
          <p>{t('story_micro_banner_text')}</p>
          <button className="button-small ml-5">{t('story_micro_banner_subscribe_now')}</button>
          <button onClick={onDismiss} className="button-small ml-5">{t('story_micro_banner_dismiss')}</button>
        </div>
      )}
      {/** Title */}
      <div className="story_title-container">
        <h1>{title}</h1>
      </div>
      {/** Story Metadata */}
      <div className="story_sub-container">
        <p className="story_description">{description}</p>
        <p className="story_author">{[t('story_author_by'), author].join(' ')}</p>
        <div className="story_badge_row">
          {genres.map((genre, index) => <Chip key={genre} text={genre} shade={shadeFromIndex(index)} className={index !== 0 ? 'ml-4' : ''}/>)}
        </div>
      </div>
      {/** Views, Comments, Shares, Likes, Bookmark */}
      <div className="story_social_bar">
        <div className="story_social_bar_likes">
          <span>{likes} {t('story_social_likes')}</span>
        </div>
        <div className="story_social_action_container">
          <span className="mr-1">Like</span>
          <span className="ml-1 mr-1">Share</span>
          <span className="ml-1 mr-1">Bookmark</span>
        </div>
      </div>
      {/** Full Screen Image */}
      <div className="story_image-container">
        <img src={imgSrc} alt={imgAlt} className="story_image" />
      </div>
      {/** Story */}
      <article className="story_content">
        <ReactMarkdown className="story__markdown-layer" children={content} />
      </article>
    </div>
  );
}

export const Story = combine<StoryProps>(
  [withErrorWrapper, withProfiler],
  memo(StoryComponent),
  'story-component'
);

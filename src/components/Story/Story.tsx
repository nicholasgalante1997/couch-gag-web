import React, { memo, useMemo, useState } from 'react';
import { combine } from '@/hocs';
import ReactMarkdown from 'react-markdown';
import { StoryClassNames } from './classnames';
import { type StoryProps } from './types';
import { isServer } from '@/utils';
import { useTranslation } from '@/contexts';

function StoryComponent({
  title,
  description,
  author,
  imgAlt,
  imgSrc,
  content,
  genres
}: StoryProps): React.JSX.Element {
  const likes = 1521; /** Fetch this dynamically */
  const { t } = useTranslation();
  const isBrowser = !isServer();
  const hasAlreadyDismissed: boolean = useMemo(() => {
    if (!isBrowser) return false;
    const lsDismissedString = window.localStorage.getItem('has-dismissed-subscribe-banner');
    if (!lsDismissedString) return false;
    const lsDismissed = JSON.parse(lsDismissedString);
    return lsDismissed.hasDismissed;
  }, [isBrowser]);
  const [isDismissed, setIsDismissed] = useState(hasAlreadyDismissed);
  const onDismiss: () => void = () => {
    if (isBrowser) {
      setIsDismissed(true);
      window.localStorage.setItem('has-dismissed-subscribe-banner', JSON.stringify({ hasDismissed: true }));
    }
  };
  return (
    <div className={StoryClassNames.Wrapper}>
      {!isDismissed && (
        <div className={StoryClassNames.MicroBanner}>
          <p>{t('story_micro_banner_text')}</p>
          <button className={StoryClassNames.Button}>{t('story_micro_banner_subscribe_now')}</button>
          <button onClick={onDismiss} className={StoryClassNames.Button}>
            {t('story_micro_banner_dismiss')}
          </button>
        </div>
      )}
      <div className={StoryClassNames.TitleContainer}>
        <h1>{title}</h1>
      </div>
      <div className={StoryClassNames.SubContainer}>
        <p className={StoryClassNames.Description}>{description}</p>
        <p className={StoryClassNames.Author}>{[t('story_author_by'), author].join(' ')}</p>
      </div>
      <div className={StoryClassNames.ActionContainer}>
        <button className="button-small">Add To Shelf</button>
        <button className="button-small">Share</button>
        <button className="button-small">Like</button>
        <button className="button-small">Tip</button>
      </div>
      <div className={StoryClassNames.SocialBar}>
        <div className={StoryClassNames.Likes}>
          <span>
            {likes} {t('story_social_likes')}
          </span>
        </div>
      </div>
      <div className={StoryClassNames.ImageContainer}>
        <img src={imgSrc} alt={imgAlt} className={StoryClassNames.Image} />
      </div>
      <article className={StoryClassNames.ArticleContent}>
        <ReactMarkdown className={StoryClassNames.Markdown}>{content}</ReactMarkdown>
      </article>
    </div>
  );
}

export const Story = combine<StoryProps>([], memo(StoryComponent), 'story-component');
Story.displayName = 'Couch__StoryPageComponent';

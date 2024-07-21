import React, { memo } from 'react';

import { colorBaseBluePrimary, colorBaseGrayEpsilon } from 'heller-2-lite';
import { Body, Heading } from 'heller-2-react';
import { UilFileDownloadAlt, UilFileShareAlt } from '@iconscout/react-unicons';
import { Markdown } from '@/components/Markdown';

import { useTranslation } from '@/contexts';
import { combine } from '@/hocs';
import { download } from '@/utils';

import { StoryClassNames } from './classnames';
import { type StoryProps } from './types';

const staticDownloadHref =
  'https://d1lrpeoasv2hi6.cloudfront.net/fe3a2415-3cf4-43db-9c96-7d09c0fbd4d7_CouchGag_Test.pdf';

function StoryComponent({ title, description, author, content }: StoryProps): React.JSX.Element {
  const { t } = useTranslation();
  function handleDownload() {
    download(staticDownloadHref, 'CouchGag-Test.pdf');
  }
  return (
    <div className={StoryClassNames.Wrapper}>
      <div className={StoryClassNames.TitleContainer}>
        <Heading as="h1" style={{ color: colorBaseBluePrimary }}>
          {title}
        </Heading>
      </div>
      <div className={StoryClassNames.SubContainer}>
        <Body as="p" style={{ color: colorBaseGrayEpsilon }} bold className={StoryClassNames.Description}>
          {description}
        </Body>
        <Body as="p" className={StoryClassNames.Author}>
          {[t('story_author_by'), author].join(' ')}
        </Body>
      </div>
      <div className={StoryClassNames.ActionContainer}>
        <span role="button" className="story__icon-btn">
          <UilFileShareAlt fill="#FFF" size="24" />
        </span>
        <span role="button" className="story__icon-btn" data-color="green" onClick={handleDownload}>
          <UilFileDownloadAlt fill="#FFF" size="24" />
        </span>
      </div>
      <article className={StoryClassNames.ArticleContent}>
        <Markdown content={content} />
      </article>
    </div>
  );
}

export const Story = combine<StoryProps>([], memo(StoryComponent), 'story-component');
Story.displayName = 'Couch__StoryPageComponent';

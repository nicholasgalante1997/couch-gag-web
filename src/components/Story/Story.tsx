import { Body, Heading } from 'heller-2-react';
import React, { memo } from 'react';
import { colorBaseBluePrimary, colorBaseGrayEpsilon } from 'heller-2-lite';
import { UilFileDownloadAlt, UilFileShareAlt } from '@iconscout/react-unicons';
import { combine } from '@/hocs';
import ReactMarkdown from 'react-markdown';
import { StoryClassNames } from './classnames';
import { type StoryProps } from './types';
import { useTranslation } from '@/contexts';
import { type NormalComponents } from 'react-markdown/lib/complex-types';
import { type SpecialComponents } from 'react-markdown/lib/ast-to-react';

function getMarkdownComponents(): Partial<
  Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
> {
  return {
    p: ({ node, children, ...rest }) => (
      <Body {...rest} style={{ marginBlock: '8px' }} as="p">
        {children}
      </Body>
    ),
    b: ({ node, children, ...rest }) => (
      <Body {...rest} bold as="p">
        {children}
      </Body>
    ),
    i: ({ node, children, ...rest }) => (
      <Body {...rest} italic as="p">
        {children}
      </Body>
    ),
    h1: ({ node, children, ...rest }) => (
      <Heading {...rest} as="h1">
        {children}
      </Heading>
    ),
    h2: ({ node, children, ...rest }) => (
      <Heading {...rest} as="h2">
        {children}
      </Heading>
    ),
    h3: ({ node, children, ...rest }) => (
      <Heading {...rest} as="h3">
        {children}
      </Heading>
    ),
    h4: ({ node, children, ...rest }) => (
      <Heading {...rest} as="h4">
        {children}
      </Heading>
    ),
    h5: ({ node, children, ...rest }) => (
      <Heading {...rest} as="h5">
        {children}
      </Heading>
    ),
    h6: ({ node, children, ...rest }) => (
      <Heading {...rest} as="h6">
        {children}
      </Heading>
    )
  };
}

function StoryComponent({ title, description, author, content }: StoryProps): React.JSX.Element {
  const { t } = useTranslation();
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
        <span role="button" className="story__icon-btn" data-color="green">
          <UilFileDownloadAlt fill="#FFF" size="24" />
        </span>
      </div>
      <article className={StoryClassNames.ArticleContent}>
        <ReactMarkdown components={getMarkdownComponents()} className={StoryClassNames.Markdown}>
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
}

export const Story = combine<StoryProps>([], memo(StoryComponent), 'story-component');
Story.displayName = 'Couch__StoryPageComponent';

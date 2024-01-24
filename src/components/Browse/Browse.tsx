import React, { memo, useCallback, useState } from 'react';
import { Body, Heading } from 'heller-2-react';
import { colorBaseGrayEta } from 'heller-2-lite';
import { useTranslation, useWritContext } from '@/contexts';
import { combine } from '@/hocs';
import { Card } from '../Card';
import { BrowseComponentClassNames } from './classnames';
import classNames from 'classnames';

function BrowseComponent(): React.JSX.Element {
  const [search, setSearchValue] = useState<string>();

  const { t } = useTranslation();
  const { getAll } = useWritContext();

  const writ = getAll();

  const writToContentJsx = useCallback((writObject: (typeof writ)[number], _index: number) => {
    return (
      <Card
        size="lg"
        type="full"
        title={writObject.title}
        description={writObject.subtitle}
        key={writObject.slug}
        image={'/doodles2.webp'}
        cta={{ href: `/${writObject.slug}.html`, text: 'Read More' }}
      />
    );
  }, []);

  const filterOnSearch = (writObject: (typeof writ)[number]): boolean => {
    if (!search) {
      return true;
    } else {
      const { author, title, slug, subtitle, genres = [] } = writObject;
      return (
        author.toLowerCase().includes(search.toLowerCase()) ||
        title.toLowerCase().includes(search.toLowerCase()) ||
        slug.toLowerCase().includes(search.toLowerCase()) ||
        subtitle.toLowerCase().includes(search.toLowerCase()) ||
        (genres || [])
          .map((g) => (g ? g.toLowerCase() : ''))
          .join(' ')
          .includes(search.toLowerCase())
      );
    }
  };

  const updateSearch: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  return (
    <div className={BrowseComponentClassNames.Wrapper}>
      <div className={BrowseComponentClassNames.Column}>
        <div className={BrowseComponentClassNames.HeadingContainer}>
          <span role="heading" style={{ width: 'fit-content' }}>
            <Heading as="h1" className={BrowseComponentClassNames.Heading}>
              {t('browse_heading_season_one')}&nbsp;
            </Heading>
          </span>
          <Body
            as="p"
            bold
            className={classNames('mt-4', BrowseComponentClassNames.Subheading)}
          >
            {t('browse_heading_season_one_synopsis')}
          </Body>
        </div>
        <div className={BrowseComponentClassNames.CardGrid}>
          {writ.filter(filterOnSearch).map(writToContentJsx)}
        </div>
      </div>
    </div>
  );
}

export const Browse = combine<{}>([], memo(BrowseComponent), 'browse-component');
Browse.displayName = 'Couch__BrowseComponent';

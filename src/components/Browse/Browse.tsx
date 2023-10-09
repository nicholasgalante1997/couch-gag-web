import React, { memo, useCallback, useState } from 'react';
import { combine } from '@/hocs';
import { useTranslation, useWritContext } from '@/contexts';
import { BrowseComponentClassNames } from './classnames';
import { Card } from '../Card';

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
        genres
          .map((g) => g.toLowerCase())
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
        <div className={BrowseComponentClassNames.SearchRow}>
          <span className={BrowseComponentClassNames.SearchSpan}>{t('browse_heading')}</span>
          <input
            type="text"
            placeholder="Search Stories..."
            value={search}
            onChange={updateSearch}
            className={BrowseComponentClassNames.SearchInput}
          />
        </div>
        <div className={BrowseComponentClassNames.CardGrid}>
          {writ.filter(filterOnSearch).map(writToContentJsx)}
        </div>
      </div>
    </div>
  );
}

export const Browse = combine<{}>([], memo(BrowseComponent), 'browse-component');
Browse.displayName = 'Couch__BrowseComponent'

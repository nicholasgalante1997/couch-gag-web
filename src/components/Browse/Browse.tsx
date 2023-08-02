import React, { memo, useCallback, useMemo, useState } from 'react';
import { combine, withProfiler } from '@/hocs';
import { useTranslation, useWritContext } from '@/contexts';
import { BrowseComponentClassNames } from './classnames';
import { ContentWidget } from '../ContentWidget';

const ColorSwatch = [
  ['var(--rich-black)', 'var(--risd-blue)', 'dark'],
  ['var(--rich-black)', 'var(--risd-blue)', 'dark']
] as const;

const seasons = [
  {
    plaintext: 'Season One',
    key: '01'
  },
  {
    plaintext: 'Season Two',
    key: '02'
  }
] as const;

function BrowseComponent(): React.JSX.Element {
  const [search, setSearchValue] = useState<string>();
  const [season, setSeason] = useState<`0${number}`>(seasons[0].key);

  const { t } = useTranslation();
  const { getAll } = useWritContext();

  function filterOnSeason(): ReturnType<typeof getAll> {
    return getAll().filter(({ seasonKey }) => seasonKey === season);
  }
  const mFilterGetAllBySeasonOne = useCallback(filterOnSeason, [getAll, season]);
  const writ = useMemo(mFilterGetAllBySeasonOne, [mFilterGetAllBySeasonOne, season]);

  const writToContentJsx = useCallback((writObject: (typeof writ)[number], index: number) => {
    const remainder = index % 2;
    const [backgroundColor, foregroundColor, supportingTheme] = ColorSwatch[remainder];
    const shadingDirection = index % 2 === 0 ? ('r' as const) : ('l' as const);
    const props = { ...writObject, backgroundColor, foregroundColor, supportingTheme, shadingDirection };
    return <ContentWidget {...props} />;
  }, []);

  const seasonToJsx = useCallback(
    ({ plaintext, key }: (typeof seasons)[number]) => {
      return (
        <span
          onClick={() => {
            setSeason(key);
          }}
          className={season === key ? BrowseComponentClassNames.TabActive : BrowseComponentClassNames.Tab}
        >
          {plaintext}
        </span>
      );
    },
    [season]
  );

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
        <div className={BrowseComponentClassNames.SeasonRow}>{seasons.map(seasonToJsx)}</div>
        {writ.filter(filterOnSearch).map(writToContentJsx)}
      </div>
    </div>
  );
}

export const Browse = combine([withProfiler], memo(BrowseComponent), 'browse-component');

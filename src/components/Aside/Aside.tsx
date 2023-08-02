import React, { memo, useEffect, useMemo, useState } from 'react';
import { combine, withProfiler } from '@/hocs';
import { isServer, svgMap, to } from '@/utils';
import { AsideClassnames } from './classnames';
import classnames from 'classnames';
import { useTranslation } from '@/contexts';

function AsideComponent(): JSX.Element {
  const isBrowser = !isServer();
  let lsAsideOpen = false;
  if (isBrowser) {
    const hasStoredValue = window.localStorage.getItem('couch-gag__aside__open');
    if (hasStoredValue) {
      lsAsideOpen = JSON.parse(hasStoredValue).isOpen as boolean;
    }
  }

  const [expanded, setExpanded] = useState(lsAsideOpen);
  const { t } = useTranslation();

  useEffect(() => {
    window.localStorage.setItem('couch-gag__aside__open', JSON.stringify({ isOpen: expanded }));
  }, [expanded]);

  const parentClassName = useMemo(
    () =>
      classnames({
        [AsideClassnames.Container]: !expanded,
        [AsideClassnames.ContainerExpanded]: expanded,
        chunk: true
      }),
    [expanded]
  );

  const badgeClassName = useMemo(
    () =>
      classnames({
        [AsideClassnames.Badge]: !expanded,
        [AsideClassnames.BadgeExpanded]: expanded
      }),
    [expanded]
  );

  const badgeTextClassname = useMemo(
    () =>
      classnames({
        [AsideClassnames.BadgeExpandedText]: true,
        'ml-2': true
      }),
    []
  );

  const imgProperties = useMemo(
    () => ({
      alt: expanded ? 'An image of a caret pointing up.' : 'An image of a caret pointing right',
      src: expanded ? svgMap.pinch : svgMap.open
    }),
    [expanded]
  );

  return (
    <div className={parentClassName}>
      <div className={AsideClassnames.LogoContainer}>
        <img src="/favicon-32x32.png" height="32px" width="32px" />
        {expanded && <p className={badgeTextClassname}>{t('aside_logo_text')}</p>}
      </div>
      <div className={AsideClassnames.SeasonContainer}>
        <div
          className={badgeClassName}
          role="button"
          onClick={() => {
            to('/browse.html');
          }}
        >
          <img height="20px" width="20px" src={svgMap.books} alt="a stack of papers icon" />
          {expanded && <p className={badgeTextClassname}>{t('aside_browse_stories')}</p>}
        </div>
        <div
          className={classnames(badgeClassName, 'mt-4')}
          role="button"
          onClick={() => {
            to('/contribute.html');
          }}
        >
          <img height="20px" width="20px" src={svgMap.upload} alt="an upload file icon" />
          {expanded && <p className={badgeTextClassname}>{t('aside_submit_story')}</p>}
        </div>
        <div
          role="button"
          onClick={() => {
            to('/about.html');
          }}
          className={classnames(badgeClassName, 'mt-4')}
        >
          <img height="20px" width="20px" src={svgMap.info} alt="an icon of an info circle" />
          {expanded && <p className={badgeTextClassname}>{t('aside_about')}</p>}
        </div>
      </div>
      <div className={AsideClassnames.ExpandAsideContainer}>
        <div
          className={badgeClassName}
          onClick={() => {
            setExpanded((p) => !p);
          }}
        >
          <img height="20px" width="20px" {...imgProperties} />
          {expanded && <p className={badgeTextClassname}>{t('aside_close')}</p>}
        </div>
      </div>
    </div>
  );
}

export const Aside = combine([withProfiler], memo(AsideComponent), 'PageSidebar');

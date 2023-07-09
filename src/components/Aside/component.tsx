import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import classnames from 'classnames';
import { withProfiler, withErrorWrapper } from '@/hocs';
import { isServer, combine, svgMap } from '@/utils';

const AsideClassnames = {
  Container: 'aside__container',
  ContainerExpanded: 'aside__container-open',
  LogoContainer: 'aside__logo-container',
  LogoExpandedText: 'aside__logo-expanded-text',
  ExpandButtonContainer: 'aside__expand-container',
  Badge: 'aside__badge-normal',
  BadgeExpanded: 'aside__badge-expanded',
  BadgeExpandedText: 'aside__badge-text',
  SeasonContainer: 'aside__season-container',
  ExpandAsideContainer: 'aside__expand-container',
  ExpandeAsideText: 'aside__expand-container-text'
};

function AsideComponent () {
  const isBrowser = !isServer();
  let lsAsideOpen = false;
  if (isBrowser) {
    const hasStoredValue = window.localStorage.getItem('couch-gag__aside__open');
    if (hasStoredValue) {
      lsAsideOpen = !!JSON.parse(hasStoredValue).isOpen;
    }
  }

  const [expanded, setExpanded] = useState(lsAsideOpen);

  const to = useCallback((path: string) => {
    if (!isServer()) {
      window.location.assign(path);
    }
  }, []);

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
        <img src="/web.svg" height="48px" width="48px" />
        {expanded && <p className={badgeTextClassname}>The Couch Gag</p>}
      </div>
      <div className={AsideClassnames.SeasonContainer}>
        <div
          className={badgeClassName}
          role="button"
          onClick={() => {
            to('/browse-stories');
          }}
        >
          <img height="20px" width="20px" src={svgMap.books} alt="a stack of papers icon" />
          {expanded && <p className={badgeTextClassname}>Browse Stories</p>}
        </div>
        <div
          className={classnames(badgeClassName, 'mt-4')}
          role="button"
          onClick={() => {
            to('/contribute');
          }}
        >
          <img height="20px" width="20px" src={svgMap.upload} alt="an upload file icon" />
          {expanded && <p className={badgeTextClassname}>Submit A Story</p>}
        </div>
        <div className={classnames(badgeClassName, 'mt-4')}>
          <img height="20px" width="20px" />
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
          {expanded && <p className={badgeTextClassname}>Close</p>}
        </div>
      </div>
    </div>
  );
}

export const Aside = combine([withProfiler, withErrorWrapper], memo(AsideComponent), 'PageSidebar');

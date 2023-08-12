import React, { memo, useState } from 'react';
import { combine, withProfiler } from '@/hocs';
import { AsideClassnames } from './classnames';
import classnames from 'classnames';
import { to } from '@/utils';

const TooltipMap = {
  home: {
    title: 'Home',
    sub: 'The landing page'
  },
  browse: {
    title: 'Browse',
    sub: 'Browse available stories'
  },
  upload: {
    title: 'Upload',
    sub: 'Submit a story'
  },
  about: {
    title: 'About',
    sub: 'Read our prologue'
  }
} as const;

function AsideComponent(): React.JSX.Element {
  const [hover, setHover] = useState<keyof typeof TooltipMap>();

  const onHover = (k: keyof typeof TooltipMap): void => {
    setHover(k);
  };
  const offHover = (): void => {
    setHover(undefined);
  };

  return (
    <div className={AsideClassnames.Container}>
      <div
        onMouseEnter={() => onHover('home')}
        onMouseLeave={offHover}
        className={AsideClassnames.LogoContainer}
      >
        <img
          onClick={() => {
            to('/');
          }}
          className="pointer"
          role="button"
          tabIndex={1}
          src="/favicon.ico"
          height="40px"
          width="40px"
        />
      </div>
      <div className={AsideClassnames.SeasonContainer}>
        <div
          onMouseEnter={() => onHover('browse')}
          onMouseLeave={offHover}
          className={AsideClassnames.Badge}
          role="button"
          onClick={() => {
            to('/browse.html');
          }}
        >
          <img height="40px" width="40px" src="/bookshelf.png" alt="a stack of papers icon" />
        </div>
        <div
          onMouseEnter={() => onHover('upload')}
          onMouseLeave={offHover}
          className={classnames(AsideClassnames.Badge, 'mt-4')}
          role="button"
          onClick={() => {
            to('/contribute.html');
          }}
        >
          <img height="40px" width="40px" src="/upload_alt.png" alt="an upload file icon" />
        </div>
        <div
          onMouseEnter={() => onHover('about')}
          onMouseLeave={offHover}
          className={classnames(AsideClassnames.Badge, 'mt-4')}
          role="button"
          onClick={() => {
            to('/about.html');
          }}
        >
          <img height="40px" width="40px" src="/information.png" alt="an icon of an info circle" />
        </div>
      </div>
      {hover && (
        <div className={AsideClassnames.BottomContainer}>
          <p>{TooltipMap[hover].title}</p>
        </div>
      )}
    </div>
  );
}

export const Aside = combine([withProfiler], memo(AsideComponent), 'PageSidebar');

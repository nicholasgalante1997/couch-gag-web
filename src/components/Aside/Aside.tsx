import React, { memo } from 'react';

import BloggerAltIcon from '@iconscout/react-unicons/icons/uil-blogger-alt';
import AppsIcon from '@iconscout/react-unicons/icons/uil-apps';
import InfoCircleIcon from '@iconscout/react-unicons/icons/uil-info-circle';

import { combine } from '@/hocs';
import { to } from '@/utils';

import { AsideClassnames } from './classnames';

function AsideComponent(): React.JSX.Element {
  return (
    <div className={AsideClassnames.Container}>
      <div className={AsideClassnames.SeasonContainer}>
        <span
          onClick={() => {
            to('/');
          }}
          className="pointer scale-on-hover"
          role="button"
          tabIndex={1}
        >
          <BloggerAltIcon fill="#fff" size="24" />
        </span>
        <span
          className={AsideClassnames.Badge}
          role="button"
          onClick={() => {
            to('/browse.html');
          }}
        >
          <AppsIcon fill="#fff" size="24" />
        </span>
        <span
          className={AsideClassnames.Badge}
          role="button"
          onClick={() => {
            to('/about.html');
          }}
        >
          <InfoCircleIcon fill="#fff" size="24" />
        </span>
      </div>
    </div>
  );
}

export const Aside = combine<{}>([], memo(AsideComponent), 'Couch-Aside-Component');
Aside.displayName = 'Couch__AsideComponent';

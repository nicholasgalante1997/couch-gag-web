import React, { memo } from 'react';
import { useTranslation } from '@/contexts';
import { withProfiler, withErrorWrapper, combine } from '@/hocs';
import { ContributeBannerClassNames } from './classnames';
import { fmtLocaleString } from '@/utils';

function ContributeBannerComponent (): JSX.Element {
  const { t } = useTranslation();
  return (
        <div className={ContributeBannerClassNames.Wrapper}>
            <h1 className={ContributeBannerClassNames.Title}>
              {t('lp_contribute_banner_title')}
            </h1>
            <p className={ContributeBannerClassNames.Text}>
              {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
              {fmtLocaleString(t('lp_contribute_banner_text')!, { copyright: '&copy;' })}
            </p>
            <button className="button-smpl mt-3">
              {t('lp_contribute_banner_cta')}
            </button>
        </div>
  );
}

export const ContributeBanner = combine(
  [withProfiler, withErrorWrapper],
  memo(ContributeBannerComponent),
  'lp-contribute-banner'
);

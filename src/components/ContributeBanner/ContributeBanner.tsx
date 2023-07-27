import React, { memo } from 'react';
import { useTranslation } from '@/contexts';
import { withProfiler, withErrorWrapper, combine } from '@/hocs';
import { ContributeBannerClassNames } from './classnames';

function ContributeBannerComponent (): JSX.Element {
  const { t } = useTranslation();
  return (
        <div className={ContributeBannerClassNames.Wrapper}>
            <h1 className={ContributeBannerClassNames.Title}>
              {t('lp_contribute_banner_title')}
            </h1>
            <p className={ContributeBannerClassNames.Text}>
              {t('lp_contribute_banner_text')}
            </p>
            <p className={ContributeBannerClassNames.Bold}>
              {t('lp_contribute_banner_bold')}
            </p>
            <p className={ContributeBannerClassNames.Text}>
              {t('lp_contribute_banner_call')}
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

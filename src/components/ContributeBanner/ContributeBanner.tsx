import React, { memo } from 'react';
import {
  boldParagraphLayerAnimationId,
  boldParagraphOnEnter,
  headingLayerAnimationId,
  headingOnEnter,
  lowerParagraphLayerAnimationId,
  topParagraphLayerAnimationId,
  topParagraphOnEnter,
  trailParagraphOnEnter
} from './animations';
import { combine, withErrorWrapper, withProfiler } from '@/hocs';
import { ContributeBannerClassNames } from './classnames';
import { useOnElementEnter } from '@/hooks';
import { useTranslation } from '@/contexts';

function ContributeBannerComponent(): JSX.Element {
  const { t } = useTranslation();
  useOnElementEnter(headingLayerAnimationId, headingOnEnter);
  useOnElementEnter(topParagraphLayerAnimationId, topParagraphOnEnter);
  useOnElementEnter(boldParagraphLayerAnimationId, boldParagraphOnEnter);
  useOnElementEnter(lowerParagraphLayerAnimationId, trailParagraphOnEnter);
  return (
    <div className={ContributeBannerClassNames.Wrapper}>
      <h1 id={headingLayerAnimationId} className={ContributeBannerClassNames.Title}>
        {t('lp_contribute_banner_title')}
      </h1>
      <p id={topParagraphLayerAnimationId} className={ContributeBannerClassNames.Text}>
        {t('lp_contribute_banner_text')}
      </p>
      <p id={boldParagraphLayerAnimationId} className={ContributeBannerClassNames.Bold}>
        {t('lp_contribute_banner_bold')}
      </p>
      <p id={lowerParagraphLayerAnimationId} className={ContributeBannerClassNames.Text}>
        {t('lp_contribute_banner_call')}
      </p>
      <button className="button-smpl mt-3">{t('lp_contribute_banner_cta')}</button>
    </div>
  );
}

export const ContributeBanner = combine(
  [withProfiler, withErrorWrapper],
  memo(ContributeBannerComponent),
  'lp-contribute-banner'
);

import React, { memo } from 'react';
import { useTranslation } from '@/contexts';
import { withProfiler } from '@/hocs';

function SubscribeBannerComponent () {
  const { t } = useTranslation();
  return (
    <div className="sb__container">
      <p className="sb__text">
        {t('lp_sub_banner_text_shard_1')}&nbsp;
        <span className="sb__span">{t('lp_sub_banner_span_text')}</span>&nbsp;
        {t('lp_sub_banner_text_shard_2')}
      </p>
      &nbsp;
      <button className="button-smpl">{t('lp_sub_banner_cta')}</button>
    </div>
  );
}

export const SubscribeBanner = withProfiler('SubscribeBanner', memo(SubscribeBannerComponent));

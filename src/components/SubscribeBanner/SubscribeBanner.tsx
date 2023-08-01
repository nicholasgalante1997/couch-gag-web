import React, { memo } from 'react';
import { combine, withErrorWrapper, withProfiler } from '@/hocs';
import { SubscribeBannerClassNames } from './classnames';
import { useTranslation } from '@/contexts';

function SubscribeBannerComponent(): React.JSX.Element {
  const { t } = useTranslation();
  return (
    <div className={SubscribeBannerClassNames.Wrapper}>
      <p className={SubscribeBannerClassNames.Text}>
        {t('lp_sub_banner_text_shard_1')}&nbsp;
        <span className={SubscribeBannerClassNames.Span}>{t('lp_sub_banner_span_text')}</span>&nbsp;
        {t('lp_sub_banner_text_shard_2')}
      </p>
      &nbsp;
      <button className="button-smpl">{t('lp_sub_banner_cta')}</button>
    </div>
  );
}

export const SubscribeBanner = combine(
  [withProfiler, withErrorWrapper],
  memo(SubscribeBannerComponent),
  'subscribe-banner'
);

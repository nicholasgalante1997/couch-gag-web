import React, { memo, useMemo } from 'react';
import classnames from 'classnames';
import { combine, withErrorWrapper, withProfiler } from '@/hocs';
import { useTranslation } from '@/contexts';
import { HeroImageClassnames } from './classnames';

function HeroImageComponent (): JSX.Element {
  const { t } = useTranslation();
  const titleClassname = useMemo(() => classnames(HeroImageClassnames.Title, 'pac'), []);
  const textClassname = useMemo(() => classnames(HeroImageClassnames.Text, 'ls'), []);
  return (
    <div className={HeroImageClassnames.Container}>
      <div className={HeroImageClassnames.MiniCol}>
        <h6 className={titleClassname}>
          {t('lp_title_shard_1')} {t('lp_title_shard_2')} {t('lp_title_shard_3')}
        </h6>
        <p className={textClassname}>{t('lp_subtext_block')}</p>
        <button className={HeroImageClassnames.Button}>{t('lp_action_cta')}</button>
      </div>
      <img src="/woods.webp" alt="A skyview shot of a woodland area" className={HeroImageClassnames.Image} />
    </div>
  );
}

export const Hero = combine([withProfiler, withErrorWrapper], memo(HeroImageComponent), 'lp-hero');

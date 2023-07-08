import React, { memo, useMemo } from 'react';
import classnames from 'classnames';
import { withProfiler } from '@/hocs';
import { useTranslation } from '@/contexts';

const HeroImageClassnames = {
  Container: 'hero__container',
  MiniCol: 'hero__mini-col',
  Title: 'hero__title',
  Text: 'hero__text',
  Image: 'hero__lp-image',
  Button: 'button-smpl',
} as const;

function HeroImageComponent() {
  const { t } = useTranslation();
  const titleClassname = useMemo(() => classnames(HeroImageClassnames.Title, 'pac', 'fade-in-left'), []);
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

export const Hero = withProfiler('HeroImage', memo(HeroImageComponent));

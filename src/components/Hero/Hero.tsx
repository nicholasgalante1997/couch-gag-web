import React, { memo, useCallback, useMemo } from 'react';
import { combine, withProfiler } from '@/hocs';
import { useTranslation, useWritContext } from '@/contexts';
import { HeroImageClassnames } from './classnames';
import classnames from 'classnames';
import { to } from '@/utils';

function HeroImageComponent(): JSX.Element {
  const { t } = useTranslation();
  const { getOne } = useWritContext();
  const originStory = getOne('key', '0101');
  let slug = '/404';
  if (originStory) {
    slug = originStory.slug;
  }
  const titleClassname = useMemo(() => classnames(HeroImageClassnames.Title, 'pac'), []);
  const textClassname = useMemo(() => classnames(HeroImageClassnames.Text, 'ls'), []);
  const aboutOnClick = useCallback(() => {
    to('/about.html');
  }, [to]);
  const readOnClick = useCallback(() => {
    to(`/${slug}.html`);
  }, [to]);
  return (
    <div className={HeroImageClassnames.Container}>
      <div className={HeroImageClassnames.MiniCol}>
        <h6 className={titleClassname}>
          {t('lp_title_shard_1')} {t('lp_title_shard_2')} {t('lp_title_shard_3')}
        </h6>
        <p className={textClassname}>{t('lp_subtext_block')}</p>
        <div className={HeroImageClassnames.Row}>
          <button onClick={readOnClick} className={HeroImageClassnames.Button}>
            {t('lp_action_cta')}
          </button>
          <button onClick={aboutOnClick} className={HeroImageClassnames.Button}>
            {t('lp_action_about_cta')}
          </button>
        </div>
      </div>
      <img src="/woods.webp" alt="A skyview shot of a woodland area" className={HeroImageClassnames.Image} />
    </div>
  );
}

export const Hero = combine([withProfiler], memo(HeroImageComponent), 'lp-hero');

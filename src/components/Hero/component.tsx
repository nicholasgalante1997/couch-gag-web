import React, { memo } from 'react';
import { withProfiler } from '@/hocs';
import { useTranslation } from '@/contexts';

function HeroImageComponent(){
    const { t } = useTranslation();
    return (
        <div className="hero__container">
            <div className="hero__mini-col">
                <h6 className="pac hero__title fade-in-left">
                    {t('lp_title_shard_1')} {t('lp_title_shard_2')} {t('lp_title_shard_3')}
                </h6>
                <p className="hero__text ls">
                    {t('lp_subtext_block')}
                </p>
                <button className="button-smpl">{t('lp_action_cta')}</button>
            </div>
            <img src="/woods.jpg" alt="Cave in antarctica" width="40%" height="auto" />
        </div>
    );
}

export const Hero = withProfiler(
    'HeroImage',
    memo(HeroImageComponent)
);

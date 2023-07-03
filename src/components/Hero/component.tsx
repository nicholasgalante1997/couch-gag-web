import React, { memo } from 'react';
import { withProfiler } from '@/hocs';
import { useTranslation } from '@/contexts';

function HeroImageComponent(){
    const { t } = useTranslation();
    return (
        <div className="hero__container">
            <img className="hero__image-background" loading="lazy" src="/lp.jpg" alt="car (van, yellow) driving down desert road" />
            <h1 className="chunk hero__title fade-in-down">{t('lp_title_shard_1')}</h1>
            <div className="hero__mini-row">
                <h1 className="chunk hero__title fade-in-left">{t('lp_title_shard_2')}</h1>
                <h1 className="chunk hero__title fade-in-up">{t('lp_title_shard_3')}</h1>
            </div>
        </div>
    );
}

export const Hero = withProfiler(
    'HeroImage',
    memo(HeroImageComponent)
)
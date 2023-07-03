import React, { memo } from 'react';
import { FontFamily } from '@/types';
import { FadeInDown, HeroImage as HeroImgBackground, HeroImageContainer, MiniRow, FadeInLeft, FadeInUp } from './styles';
import { withProfiler } from '@/hocs';

function HeroImageComponent(){
    return (
        <HeroImageContainer>
            <HeroImgBackground loading="lazy" src="/lp.jpg" alt="car (van, yellow) driving down desert road" />
            <FadeInDown as="h1" font={FontFamily.Relieve}>The</FadeInDown>
            <MiniRow>
                <FadeInLeft as="h1" font={FontFamily.Relieve}>Couch</FadeInLeft>
                <FadeInUp as="h1" font={FontFamily.Relieve}>Gag</FadeInUp>
            </MiniRow>
        </HeroImageContainer>
    );
}

export const Hero = withProfiler(
    'HeroImage',
    memo(HeroImageComponent)
)
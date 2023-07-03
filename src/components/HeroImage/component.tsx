import React from 'react';
import { FontFamily } from '@/types';
import { FadeInDown, HeroImage, HeroImageContainer, MiniRow, FadeInLeft, FadeInUp } from './styles';

function HeroImageComponent(){
    return (
        <HeroImageContainer>
            <HeroImage loading="lazy" src="" alt="" />
            <FadeInDown as="h1" font={FontFamily.Relieve}>The</FadeInDown>
            <MiniRow>
                <FadeInLeft as="h1" font={FontFamily.Relieve}>Couch</FadeInLeft>
                <FadeInUp as="h1" font={FontFamily.Relieve}>Gag</FadeInUp>
            </MiniRow>
        </HeroImageContainer>
    );
}
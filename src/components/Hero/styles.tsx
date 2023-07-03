import styled, { keyframes } from 'styled-components';
import { Font } from '@/components';

export const HeroImageContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    z-index: 1;
`;

export const MiniRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const HeroImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    z-index: 1;
`;

export const HeroText = styled(Font)`
    font-size: 44px;
    line-height: 1.15;
    font-weight: 600;
`

const Down = keyframes`
    0% {
        transform: translateY(40px);
    }
    100% {
        transform: translateY(0px);
    }
`

export const FadeInDown = styled(HeroText)`
    animation: ${Down} 300ms ease-in 0s 1 normal;
`

const Left = keyframes`
    0% {
        transform: translateX(-40px);
    }
    100% {
        transform: translateX(0px);
    }
`

export const FadeInLeft = styled(HeroText)`
    animation: ${Left} 300ms ease-in 0s 1 normal;
`

const Up = keyframes`
    0% {
        transform: translateY(-40px);
    }
    100% {
        transform: translateY(0px);
    }
`

export const FadeInUp = styled(HeroText)`
    animation: ${Up} 300ms ease-in 0s 1 normal;
`


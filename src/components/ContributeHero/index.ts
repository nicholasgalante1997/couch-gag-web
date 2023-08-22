import { combine, withProfiler } from '@/hocs';
import { ContributeHeroComponent } from './ContributeHero';
import { memo } from 'react';

export const ContributeHero = combine(
  [withProfiler],
  memo(ContributeHeroComponent),
  'contribute-hero-section'
);

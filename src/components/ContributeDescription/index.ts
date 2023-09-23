import { combine, withProfiler } from '@/hocs';
import { ContributeDescription as ContributeDescriptionComponent } from './ContributeDescription';
import { memo } from 'react';

export const ContributeDescription = combine(
  [withProfiler],
  memo(ContributeDescriptionComponent),
  'contribute-description'
);

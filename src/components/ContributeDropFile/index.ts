import { combine, withProfiler } from '@/hocs';
import { ContributeDropFileComponent } from './ContributeDropFile';
import { memo } from 'react';

export const ContributeDropFile = combine(
  [withProfiler],
  memo(ContributeDropFileComponent),
  'contribute-drop-file'
);

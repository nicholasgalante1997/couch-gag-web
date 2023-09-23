import { combine, withProfiler } from '@/hocs';
import { ContributeDropFileComponent } from './ContributeDropFIle';
import { memo } from 'react';

export const ContributeDropFile = combine(
  [withProfiler],
  memo(ContributeDropFileComponent),
  'contribute-drop-file'
);

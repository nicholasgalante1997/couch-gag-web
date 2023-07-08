import React, { memo } from 'react';
import { ChipProps } from './types';
import classnames from 'classnames';
import { combine } from '@/utils';
import { withErrorWrapper, withProfiler } from '@/hocs';

const ChipClassnames = {
  Chip: 'chip__root',
  Vermilion: 'chip__red',
  Gold: 'chip__gold',
  Green: 'chip__green',
  Orange: 'chip__orange',
};

function ChipComponent({ shade, text }: ChipProps) {
  return (
    <span
      className={classnames({
        [ChipClassnames.Chip]: true,
        [ChipClassnames.Vermilion]: shade === 'red',
        [ChipClassnames.Gold]: shade === 'gold',
        [ChipClassnames.Green]: shade === 'green',
        [ChipClassnames.Orange]: shade === 'orange',
      })}
    >
      {text}
    </span>
  );
}

export const Chip = combine<ChipProps>([withErrorWrapper, withProfiler], memo(ChipComponent), 'chip');

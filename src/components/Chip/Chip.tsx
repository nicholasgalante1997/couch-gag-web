import React, { memo } from 'react';
import classnames from 'classnames';
import { withErrorWrapper, withProfiler, combine } from '@/hocs';
import { ChipClassnames } from './classnames';
import { type ChipProps } from './types';

function ChipComponent ({ shade, text, className, ...rest }: ChipProps): JSX.Element {
  return (
    <span
      {...rest}
      className={classnames({
        [ChipClassnames.Chip]: true,
        [ChipClassnames.Vermilion]: shade === 'red',
        [ChipClassnames.Gold]: shade === 'gold',
        [ChipClassnames.Green]: shade === 'green',
        [ChipClassnames.Orange]: shade === 'orange',
        ...(className ? { [className]: true } : {})
      })}
    >
      {text}
    </span>
  );
}

export const Chip = combine<ChipProps>([withErrorWrapper, withProfiler], memo(ChipComponent), 'Chip');

import type React from 'react';

export type ChipProps = {
  text: string
  shade: 'red' | 'gold' | 'orange' | 'green'
  className?: string
  id?: string
  role?: string
} & React.JSX.IntrinsicAttributes;

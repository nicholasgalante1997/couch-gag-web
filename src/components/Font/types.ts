import { FontFamily } from '@/types';

export type FontProps = {
  as: `h${1 | 2 | 3 | 4 | 5 | 6}` | 'p' | 'span' | 'i' | 'b' | 'blockquote' | 'code';
  className?: string;
  id?: string;
  font: FontFamily;
} & React.HTMLProps<HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement>;

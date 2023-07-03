import React, { useMemo, memo } from 'react';
import { FontProps } from './types';
import { withProfiler } from '@/hocs';

const TextTagDictionary: Record<FontProps['as'], React.FC<any>> = {
  b: ({ children, ...props }) => <b {...props}>{children}</b>,
  blockquote: ({ children, ...props }) => <blockquote {...props}>{children}</blockquote>,
  code: ({ children, ...props }) => <code {...props}>{children}</code>,
  h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
  h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
  h3: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
  h4: ({ children, ...props }) => <h4 {...props}>{children}</h4>,
  h5: ({ children, ...props }) => <h5 {...props}>{children}</h5>,
  h6: ({ children, ...props }) => <h6 {...props}>{children}</h6>,
  i: ({ children, ...props }) => <i {...props}>{children}</i>,
  p: ({ children, ...props }) => <p {...props}>{children}</p>,
  span: ({ children, ...props }) => <span {...props}>{children}</span>,
} as const;

function FontComponent(props: FontProps) {
  const { as, font, children, ...rest } = props;
  const Component = useMemo(() => TextTagDictionary[as], [as]);
  const fontStyle = useMemo(
    () => ({
      fontFamily: font,
    }),
    [font]
  );
  return (
    <Component {...rest} style={fontStyle}>
      {children}
    </Component>
  );
}

export const Font = withProfiler('Font', memo(FontComponent));

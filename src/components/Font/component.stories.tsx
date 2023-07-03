import { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Font } from './component';
import { FontFamily } from '@/types';

const meta: Meta<typeof Font> = {
  title: 'components/base/Font',
  component: Font,
  parameters: {},
  decorators: [],
  args: {},
};

type FontStory = StoryObj<typeof Font>;

export const Default: FontStory = {
  render: ({ children, ...rest }) => (
    <Font as="h1" font={FontFamily.Relieve}>
      Font: Relieve
    </Font>
  ),
};

export default meta;

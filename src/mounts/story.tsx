import React from 'react';
import { mount } from '@/utils/mount';
import { getProps } from '@/utils/getProps';
import { type StoryProps } from '@/components';
import { StoryPage } from '@/pages';

const props = getProps();

if (props == null) {
  if (typeof window !== 'undefined') {
    window.location.assign('/404');
  }
}

mount<StoryProps & { key?: string }>(StoryPage, props);

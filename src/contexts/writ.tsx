import React, { createContext, memo, useContext, useState } from 'react';
import writMd from './data/writ.json';
import { combine } from '@/utils';
import { withErrorWrapper, withProfiler } from '@/hocs';

interface WritContextType {
  getAll: () => (typeof writMd)['metadata']
  getOne: (key: string, value: unknown) => (typeof writMd)['metadata'][number] | undefined
}

const defaultWritContext = {
  getAll () {
    return writMd.metadata;
  },
  getOne (key: string, value: unknown) {
    return writMd.metadata.find((mdObj) => mdObj[key as keyof typeof mdObj] === value);
  }
};

const WritContext = createContext<WritContextType>(defaultWritContext);

export const useWritContext = () => useContext(WritContext);

const WritProviderComponent = function ({ children }: { children: React.ReactNode }) {
  const [writState] = useState(writMd);
  const getAll = () => writState.metadata;
  const getOne = (key: string, value: unknown) =>
    writState.metadata.find((mdObj) => mdObj[key as keyof typeof mdObj] === value);
  return <WritContext.Provider value={{ getAll, getOne }}>{children}</WritContext.Provider>;
};

export const WritProvider = combine<{ children: React.ReactNode }>(
  [withProfiler, withErrorWrapper],
  memo(WritProviderComponent),
  'writ-provider'
);

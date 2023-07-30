import { useState, useEffect } from 'react';
import { logger } from '@/utils';

const getAddedLogline: (id: string) => string = (id: string) => `Added element #${id} to IntersectionObserver entity.` as const;

export const useOnElementEnter = function (id: string, callback: IntersectionObserverCallback, options?: IntersectionObserverInit): void {
  const [observer, setObserver] = useState<IntersectionObserver | null>();
  useEffect(() => {
    setObserver(new IntersectionObserver(callback, options));
    return () => { setObserver(null); };
  }, []);
  useEffect(() => {
    const elementById = document.getElementById(id);
    if (observer && elementById) {
      observer.observe(elementById);
      logger.info(getAddedLogline(id));
      return () => { observer.disconnect(); };
    }
  }, [observer, id]);
};

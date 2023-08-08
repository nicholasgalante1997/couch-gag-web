import { combine, withProfiler } from '@/hocs';
import React, { createContext, memo, useContext, useEffect, useState } from 'react';

interface WorkerContextType {
  workers: Map<string, Worker>;
  addWorker: (f: string) => Worker | null;
}

const initialWorkerMap = new Map<string, Worker>();
const addWorker = (f: string) => null;

const WorkerContext = createContext<WorkerContextType>({
  workers: initialWorkerMap,
  addWorker
});

export const useWorkerContext = () => {
  const { addWorker, workers } = useContext(WorkerContext);
  function requestWorker(f: string): Worker | undefined {
    return workers.get(f);
  }
  function dispatchWorkerMsg(w: string, m: unknown): boolean {
    const worker = requestWorker(w);
    if (!worker) {
      return false;
    } else {
      worker.postMessage(m);
      return true;
    }
  }
  return { addWorker, dispatchWorkerMsg, workers, requestWorker };
};

interface WorkerContextProviderComponentProps {
  children: React.ReactNode | React.ReactNode[] | React.JSX.Element | React.JSX.Element[];
}

function WorkerContextProviderComponent({ children }: WorkerContextProviderComponentProps) {
  const [workers, setWorkers] = useState<Map<string, Worker>>(new Map());
  useEffect(() => {
    if (window.Worker) {
      const prefetchWorkerKey = 'prefetch.js';
      const prefetchWorker = new Worker(prefetchWorkerKey);
      setWorkers((pastMap) => pastMap.set(prefetchWorkerKey, prefetchWorker));
    }
  }, []);
  const addWorker = (f: string): Worker | null => {
    if (window.Worker) {
      const existingWorker = workers.has(f);
      if (existingWorker) {
        return workers.get(f)!;
      } else {
        const localWorker = new Worker(f);
        setWorkers((pastMap) => pastMap.set(f, localWorker));
        return localWorker;
      }
      return null;
    } else {
      return null;
    }
  };
  return <WorkerContext.Provider value={{ workers, addWorker }}>{children}</WorkerContext.Provider>;
}

export const WorkerContextProvider = combine<WorkerContextProviderComponentProps>(
  [withProfiler],
  memo(WorkerContextProviderComponent),
  'worker-ctx-provider-component'
);

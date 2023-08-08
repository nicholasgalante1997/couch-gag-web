import { I18NProvider, WorkerContextProvider, WritProvider } from '@/contexts';
import React, { memo } from 'react';
import { Aside } from '@/components/Aside';
import { withProfiler } from '@/hocs';

function PageComponent({ children, id }: { children: React.ReactNode; id: string }): React.JSX.Element {
  return (
    <I18NProvider>
      <WorkerContextProvider>
        <WritProvider>
          <div id={id} className="couch-page">
            <Aside />
            <div className="couch-page-main">{children}</div>
          </div>
        </WritProvider>
      </WorkerContextProvider>
    </I18NProvider>
  );
}

export const Root = withProfiler('PageWrapper', memo(PageComponent));

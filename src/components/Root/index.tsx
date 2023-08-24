import { I18NProvider, ShelfContextProvider, WorkerContextProvider, WritProvider, PureS3ContextProvider } from '@/contexts';
import React, { memo } from 'react';
import { Aside } from '@/components/Aside';
import { withProfiler } from '@/hocs';

function PageComponent({ children, id }: { children: React.ReactNode, id: string }): React.JSX.Element {
  return (
    <I18NProvider>
      <WorkerContextProvider>
        <ShelfContextProvider>
          <WritProvider>
            <PureS3ContextProvider>
              <div id={id} className="couch-page">
                <Aside />
                <div className="couch-page-main">{children}</div>
              </div>
            </PureS3ContextProvider>
          </WritProvider>
        </ShelfContextProvider>
      </WorkerContextProvider>
    </I18NProvider>
  );
}

export const Root = withProfiler('PageWrapper', memo(PageComponent));

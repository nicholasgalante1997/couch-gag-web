import { ContentWidget, ContributeBanner, Hero, SubscribeBanner } from '@/components';
import React, { memo, useCallback, useMemo } from 'react';
import { combine, withErrorWrapper, withProfiler, withRootProviders } from '@/hocs';
import { useWritContext } from '@/contexts';

const ColorSwatch = [
  ['#fca311ff', 'lightblue', 'light'],
  ['#0e0035ff', '#ff3333ff', 'dark']
] as const;

function LandingPageComponent(): JSX.Element {
  const { getAll } = useWritContext();
  function filterGetAllBySeasonOne(): ReturnType<typeof getAll> {
    return getAll().filter(({ seasonKey }) => seasonKey === '01');
  }
  const mFilterGetAllBySeasonOne = useCallback(filterGetAllBySeasonOne, [getAll]);
  const writ = useMemo(mFilterGetAllBySeasonOne, [mFilterGetAllBySeasonOne]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const writToContentJsx = useCallback((writObject: (typeof writ)[number], index: number) => {
    const remainder = index % 2;
    const [backgroundColor, foregroundColor, supportingTheme] = ColorSwatch[remainder];
    const shadingDirection = index % 2 === 0 ? ('r' as const) : ('l' as const);
    const props = { ...writObject, backgroundColor, foregroundColor, supportingTheme, shadingDirection };
    return <ContentWidget {...props} />;
  }, []);
  return (
    <React.Fragment>
      <Hero />
      <SubscribeBanner />
      {/* {writ.map(writToContentJsx)} */}
      <ContributeBanner />
    </React.Fragment>
  );
}

export const LandingPage = combine(
  [withProfiler, withRootProviders, withErrorWrapper],
  memo(LandingPageComponent),
  'landing-page'
);

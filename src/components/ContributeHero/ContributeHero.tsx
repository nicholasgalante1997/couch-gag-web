import { ContributeHeroClassNames } from './classnames';
import React from 'react';
import { useTranslation } from '@/contexts';

export function ContributeHeroComponent(): React.JSX.Element {
  const { t } = useTranslation();
  return (
    <div className={ContributeHeroClassNames.HeroWrapper}>
      <h1 className={ContributeHeroClassNames.HeroTitle}>{t('contribute__hero-title')}</h1>
      <p className={ContributeHeroClassNames.HeroSubtext}>{t('contribute__hero-subtext')}</p>
    </div>
  );
}

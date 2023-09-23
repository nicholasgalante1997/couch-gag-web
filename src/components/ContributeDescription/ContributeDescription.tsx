import { ContributeDescriptionClassNames } from './classnames';
import React from 'react';
import { useTranslation } from '@/contexts';

export function ContributeDescription(): React.JSX.Element {
  const { t } = useTranslation();
  return (
    <div className={ContributeDescriptionClassNames.DescriptionWrapper}>
      <p className={ContributeDescriptionClassNames.Description}>
        {t('contribute__description_shard_1')}&nbsp;
        <span className={ContributeDescriptionClassNames.Link}>
          {t('contribute__description_download_string')}
        </span>
        &nbsp;
        {t('contribute__description_shard_2')}
      </p>
    </div>
  );
}

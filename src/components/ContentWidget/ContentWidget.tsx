import React, { memo, useMemo } from 'react';
import { combine, withErrorWrapper, withProfiler } from '@/hocs';
import { ContentWidgetClassNames } from './classnames';
import { type ContentWidgetComponentProps } from './types';
import classNames from 'classnames';
import { toTitleCase } from '@/utils';
import { useTranslation } from '@/contexts';

function ContentWidgetComponent({
  backgroundColor,
  foregroundColor: color,
  slug,
  subtitle,
  supportingTheme,
  title,
  shadingDirection,
  seasonKey,
  episodeKey,
  genres,
  img
}: ContentWidgetComponentProps): React.JSX.Element {
  const { t } = useTranslation();
  const isLightThemed = useMemo(() => supportingTheme === 'light', [supportingTheme]);
  const shadingClassName = useMemo(
    () =>
      classNames({
        [ContentWidgetClassNames.ShadingCommon]: true,
        [ContentWidgetClassNames.DarkShadingRight]: supportingTheme === 'dark' && shadingDirection === 'r',
        [ContentWidgetClassNames.DarkShadingLeft]: supportingTheme === 'dark' && shadingDirection === 'l',
        [ContentWidgetClassNames.LightShadingRight]: supportingTheme === 'light' && shadingDirection === 'r',
        [ContentWidgetClassNames.LightShadingLeft]: supportingTheme === 'light' && shadingDirection === 'l'
      }),
    [shadingDirection, supportingTheme]
  );
  const imageContainerClassName = useMemo(
    () =>
      classNames({
        [ContentWidgetClassNames.ImageContainerLeft]: shadingDirection === 'r',
        [ContentWidgetClassNames.ImageContainerRight]: shadingDirection === 'l'
      }),
    [shadingDirection]
  );
  return (
    <div style={{ backgroundColor }} className={ContentWidgetClassNames.Container}>
      <div className={shadingClassName}>
        <div className={imageContainerClassName}>
          <img className={ContentWidgetClassNames.Image} src={img} alt="Need alt text" />
        </div>
        <div className={ContentWidgetClassNames.Content}>
          <h1 style={{ color }}>{toTitleCase(title.split(' '))}</h1>
          <p style={{ color: isLightThemed ? 'black' : 'white' }}>{subtitle}</p>
          <p style={{ color: isLightThemed ? 'black' : 'white' }}>
            {t('content_widget_season')}&nbsp;
            <span style={{ color }} className="pac">
              {seasonKey}
            </span>
            &nbsp;{t('content_widget_episode')}&nbsp;
            <span style={{ color }} className="pac">
              {episodeKey}
            </span>
          </p>
          {genres && genres.length > 0 && (
            <p style={{ color: isLightThemed ? 'black' : 'white' }}>
              {t('content_widget_talks_about')}&nbsp;
              {genres.map((g) => (
                <span key={g} style={{ color }} className="pac ml-1 mr-1">
                  {g} |
                </span>
              ))}
            </p>
          )}
          <a href={`/${slug}`} target="_self" role="link" className="button-smpl">
            {t('content_widget_action')}
          </a>
        </div>
      </div>
    </div>
  );
}

export const ContentWidget = combine<ContentWidgetComponentProps>(
  [withErrorWrapper, withProfiler],
  memo(ContentWidgetComponent),
  'content-widget'
);

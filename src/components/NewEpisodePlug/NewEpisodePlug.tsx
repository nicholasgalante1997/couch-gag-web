import React, { memo } from 'react';
import { useWritContext, useTranslation } from '@/contexts';
import { combine, withErrorWrapper, withProfiler } from '@/hocs';

function NewEpisodePlugComponent (): React.JSX.Element | React.ReactNode {
  const { t } = useTranslation();
  const { getOne } = useWritContext();
  const plug = getOne('key', '0101');
  if (!plug) {
    return null;
  }
  return (
        <div className="new-episode-plug__wrapper">
            <div className="new-episode-plug__img-container">
                <img className="new-episode-plug__img" src={plug.img} alt={plug.subtitle} />
            </div>
            <div className="new-episode-plug__story-container">
                <h1 className="new-episode-plug__story-heading">
                    
                </h1>
                <p className="new-episode-plug__story-description">

                </p>
                <button className="button-smpl mt-2">

                </button>
            </div>
        </div>
  );
}

export const NewEpisodePlug = combine(
  [withProfiler, withErrorWrapper],
  memo(NewEpisodePlugComponent),
  'new-episode-plug'
);

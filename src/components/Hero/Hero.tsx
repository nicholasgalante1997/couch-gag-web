import { PrefetchOnEntryFnFactory, to } from '@/utils';
import React, { memo, useCallback, useMemo } from 'react';
import { combine } from '@/hocs';
import { useTranslation, useWorkerContext, useWritContext } from '@/contexts';
import { HeroImageClassnames } from './classnames';
import classnames from 'classnames';
import { useOnElementEnter } from '@/hooks';

const originStoryPrefetchId = 'lp_story_one_prefetch' as const;
const anchorPrefetchId = 'lp_about_anchor_prefetch' as const;

function HeroImageComponent(): JSX.Element {
  /* Load translations */
  const { t } = useTranslation();
  /* Grab Workers from WorkerContext, necessary for prefetching */
  const { addWorker, dispatchWorkerMsg, workers, requestWorker } = useWorkerContext();
  /*
   * Create a prefetch function using the function factory
   * TODO: this works okay right now, look into why it doesnt need any dependencies and if that's sustainable
   */
  const memoPrefetchAssetFn = useMemo(
    () => PrefetchOnEntryFnFactory.build('prefetch.js', workers, addWorker, requestWorker, dispatchWorkerMsg),
    []
  );

  /* When StoryOne button enters view, prefetch StoryOne html document */
  useOnElementEnter(originStoryPrefetchId, memoPrefetchAssetFn, { disabled: !memoPrefetchAssetFn });
  useOnElementEnter(anchorPrefetchId, memoPrefetchAssetFn, { disabled: !memoPrefetchAssetFn });

  /* Get access to the StoryMetadata context */
  const { getOne } = useWritContext();
  /* Query for the origin story */
  const originStory = getOne('key', '0101');
  /* assign slug to our origin story slug */
  let slug = '/404';
  if (originStory) {
    slug = originStory.slug;
  }

  /* Set up markup classnames */
  const titleClassname = useMemo(() => classnames(HeroImageClassnames.Title, 'pac'), []);
  const textClassname = useMemo(() => classnames(HeroImageClassnames.Text, 'ls'), []);

  /* set up on click handlers */
  const aboutOnClick = useCallback(() => {
    to('/about.html');
  }, [to]);
  const readOnClick = useCallback(() => {
    to(`/${slug}.html`);
  }, [to]);

  return (
    <div className={HeroImageClassnames.Container}>
      <div className={HeroImageClassnames.MiniCol}>
        <h6 className={titleClassname}>
          {t('lp_title_shard_1')} {t('lp_title_shard_2')} {t('lp_title_shard_3')}
        </h6>
        <p className={textClassname}>{t('lp_subtext_block')}</p>
        <div className={HeroImageClassnames.Row}>
          <button
            data-prefetch={`/${slug}.html`}
            id={originStoryPrefetchId}
            onClick={readOnClick}
            className={HeroImageClassnames.Button}
          >
            {t('lp_action_cta')}
          </button>
          <button
            data-prefetch="about.html"
            id={anchorPrefetchId}
            onClick={aboutOnClick}
            className={HeroImageClassnames.Button}
          >
            {t('lp_action_about_cta')}
          </button>
        </div>
      </div>
      <img src="/woods.webp" alt="A skyview shot of a woodland area" className={HeroImageClassnames.Image} />
    </div>
  );
}

export const Hero = combine<{}>([], memo(HeroImageComponent), 'lp-hero');
Hero.displayName = 'Couch__HeroComponent';

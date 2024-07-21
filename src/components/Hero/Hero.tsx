import React, { memo, useCallback, useMemo } from 'react';

import { Body, Button, Heading } from 'heller-2-react';
import classnames from 'classnames';

import { useTranslation, useWorkerContext } from '@/contexts';
import { combine } from '@/hocs';
import { useOnElementEnter } from '@/hooks';
import { PrefetchOnEntryFnFactory, to } from '@/utils';
import { HeroImageClassnames } from './classnames';
import { colorBaseGrayGamma } from 'heller-2-lite';

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

  /* Set up markup classnames */
  const titleClassname = useMemo(() => classnames(HeroImageClassnames.Title, 'pac'), []);
  const textClassname = useMemo(() => classnames(HeroImageClassnames.Text, 'ls'), []);

  const readOnClick = useCallback(() => {
    to('/browse.html');
  }, []);

  return (
    <div className={HeroImageClassnames.Container}>
      <div className={HeroImageClassnames.MiniCol}>
        <Heading as="h1" className={titleClassname} style={{ lineHeight: 1.845 }}>
          {t('lp_title_shard_1')} {t('lp_title_shard_2')} {t('lp_title_shard_3')}
        </Heading>
        <Body as="p" className={textClassname} style={{ color: colorBaseGrayGamma }}>
          {t('lp_subtext_block')}
        </Body>
        <div className={HeroImageClassnames.Row}>
          <Button
            data-prefetch={'/browse.html'}
            id={originStoryPrefetchId}
            onClick={readOnClick}
            className={HeroImageClassnames.Button}
            size="small"
            hover={{ animationType: 'background-transition' }}
            rounded
          >
            {t('lp_action_cta')}
          </Button>
        </div>
      </div>
    </div>
  );
}

export const Hero = combine<{}>([], memo(HeroImageComponent), 'lp-hero');
Hero.displayName = 'Couch__HeroComponent';

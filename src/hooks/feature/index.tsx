import { Modal } from '@arco-design/web-react';
import { FeatureComp } from '@/features';
import type { TKFeature } from '@/features/types';
import type { FeatureMeta } from '@/components/Card/types';
import { useKitStore } from '@/store';
import { useCallback } from 'react';
import useApp from '@/hooks/app';

type UseFeatureWithProp = {
  cardInfo: TKFeature;
  getFeature: (card: FeatureMeta) => TKFeature;
  open: () => void;
};
type UseFeature = {
  getFeature: (card: FeatureMeta) => TKFeature;
  open: (card: FeatureMeta) => void;
};

type EvtType = 'close';

/**
 * 在不同情况下打开 Modal。
 * @param props 卡片属性。
 */
export default function useFeature(props: FeatureMeta): UseFeatureWithProp;
export default function useFeature(): UseFeature;

export default function useFeature(
  props?: FeatureMeta
): UseFeatureWithProp | UseFeature {
  const getFeatureFromStore = useKitStore((state) => state.getFeature);

  let cardInfo = props ? getFeature(props) : null;

  function getFeature(card: FeatureMeta): TKFeature {
    return getFeatureFromStore(card.id, card.cateIndex, card.index);
  }

  const evts: Record<EvtType, Function | undefined> = { close: undefined };

  const registerCloseEvt = (close?: Function) => {
    if (typeof close === 'function') evts.close = close;
  };

  const open = useCallback(
    (card?: FeatureMeta) => {
      cardInfo = cardInfo || (card && getFeature(card)) || null;
      if (!cardInfo) throw new Error('open has no props!');

      console.log(`[${cardInfo.id}]: ${cardInfo.title}`);
      Modal.info({
        icon: null,
        title: null,
        footer: null,
        closable: true,
        style: {
          height: '100vh',
          width: '100vw',
          borderRadius: 0
        },
        content: <FeatureComp {...cardInfo} onClose={registerCloseEvt} />,
        onCancel: () => {
          useApp().init();
          evts.close && evts.close();
        }
      });
    },
    [props]
  );
  // Object.getPrototypeOf(card).constructor.name

  if (props) {
    return { cardInfo: cardInfo as TKFeature, getFeature, open };
  } else {
    return { getFeature, open };
  }
}

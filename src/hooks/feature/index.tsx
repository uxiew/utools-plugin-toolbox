import { Modal } from '@arco-design/web-react';
import Features, { FeatureComp } from '@/features';
import type { TKFeature } from '@/features/types';
import type { FeatureMeta } from '@/components/Card/types';
import { useKitStore } from '@/store';
import { useCallback } from 'react';
import useApp from '@/hooks/app';

type UseFeatureReturnType = {
  cardInfo: TKFeature;
  getFeature: (card: FeatureMeta) => TKFeature;
  openModal: () => void;
};

/**
 * 在不同情况下打开 Modal。
 * @param props 卡片属性。
 */
export default function useFeature(props: FeatureMeta): UseFeatureReturnType;
export default function useFeature(): {
  getFeature: (card: FeatureMeta) => TKFeature;
  openModal: (card: FeatureMeta) => void;
};
export default function useFeature(props?: FeatureMeta):
  | UseFeatureReturnType
  | {
      getFeature: (card: FeatureMeta) => TKFeature;
      openModal: (card: FeatureMeta) => void;
    } {
  const getFeatureFromStore = useKitStore((state) => state.getFeature);

  let cardInfo = props ? getFeature(props) : null;

  function getFeature(card: FeatureMeta): TKFeature {
    return getFeatureFromStore(card.id, card.cateIndex, card.index);
  }

  const openModal = useCallback(
    (card?: FeatureMeta) => {
      cardInfo = cardInfo || (card && getFeature(card)) || null;
      if (!cardInfo) throw new Error('openModal has no props!');

      console.log(`[${cardInfo.id}]: ${cardInfo.name}`);
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
        content: <FeatureComp {...cardInfo} />,
        onCancel: useApp().init
      });
    },
    [props]
  );
  // Object.getPrototypeOf(card).constructor.name

  if (props) {
    return { cardInfo: cardInfo as TKFeature, getFeature, openModal };
  } else {
    return { getFeature, openModal };
  }
}

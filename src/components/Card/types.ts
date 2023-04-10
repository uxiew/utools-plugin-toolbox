import type { TKFeature } from '@/features/types';



interface FeatureStoreBase {
    id: string
    index: number
    cateIndex: number,
};


// FeatureMeta for utools's feature code encoding!
export interface FeatureMeta extends FeatureStoreBase {
    mode: TKFeature['mode']
};


export type FeatureProps = FeatureMeta & TKFeature 
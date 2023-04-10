import type { FeatureMeta } from "@/components/Card/types";
import { FeatureMode } from '@/features/types';

/**
 * @description id@cateIndex@index 拆分为 { id, cateIndex, index }
 */
export function getCardInfoByCode(code: string): FeatureMeta {
    const [id, cateIndex, index, mode] = code.split('#')

    return {
        id,
        cateIndex: Number(cateIndex),
        index: Number(index),
        mode: mode as FeatureMode
    }
}
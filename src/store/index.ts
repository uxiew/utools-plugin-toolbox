
import { create } from "zustand"
import data from "./-mock"
import type { TKFeature } from "@/features/types";



type Data = {
    id: string
    name: string
    icon: string,
    features: TKFeature[]
}

interface kitStore {
    data: Data[]
    setting: object
    getFeature: (featureId: string, cateIndex: number, i?: number) => TKFeature
    _init: (data: Data[]) => void
}


export const useKitStore = create<kitStore>((set, get) => ({
    data,
    setting: {},
    getFeature: (featureId: string, cateIndex: number, i?: number) => i ? get().data[cateIndex].features[i] : get().data[cateIndex].features.filter(({ id }) => id === featureId)[0],
    _init: (data: Data[]) => set(() => ({ data }), true)
}))
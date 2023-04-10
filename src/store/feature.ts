import { create } from "zustand";


type feat = {
    code: string;
    explain: string;
    platform: "darwin" | "win32" | "linux" | ("darwin" | "win32" | "linux")[];
    icon?: string | undefined;
    cmds: (string | {
        type: "img" | "files" | "regex" | "over" | "window";
        label: string;
    })[]
}

// id => all features
interface Feature {
    features: Record<string, Array<feat>>,
    _init: (id: string) => void
    setFeature: (id: string, feat: feat) => void
    activate: (id: string, code: string) => boolean
    disable: (id: string, code: string) => void
}

export default create<Feature>((set, get) => ({
    features: {},
    _init: (id: string) => set((state) => ({ ...state, features: { [id]: [] } })),
    /** 为某个功能，关联id 设置 feature */
    setFeature(id: string, feature: feat) {
        return set((state) => {
            state.features[id] ?? state._init(id)
            state.features[id].push(feature)
            return { ...state }
        })
    },
    activate(id: string, ucode: string) {
        return utools.setFeature(get().features[id].filter(({ code }) => code === ucode)[0])
    },
    disable(code) {
        utools.removeFeature(code)
    },
}))
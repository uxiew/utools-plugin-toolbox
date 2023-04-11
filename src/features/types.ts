export type FeatureMode = 'app' | 'list' | 'none'

export interface TKFeature {
    /** id 对应 feature 下的文件名 */
    id: string
    title: string
    description: string
    url: string
    logo: string
    /** is web favorite collection */
    isCollection: boolean
    /** 默认：'app' ，对应 utools 的 mode 是 'app ' | 'list' | 'none'  // 用于无需 UI 显示，执行一些简单的代码*/
    mode: FeatureMode,
    cmds: string[]
}

export interface AllFeature extends TKFeature {
    onClose?: (close: (args?: any) => void) => void
}

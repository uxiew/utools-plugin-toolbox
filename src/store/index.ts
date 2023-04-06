
import { create } from "zustand"


type cate = {
    id: string,
    name: string,
    title: string,
    url: string,
    logo: string
    // web favorite collection
    isCollection: boolean
}
type Data = {
    id: string
    name: string
    icon: string
    list: cate[]
}

interface BoxStore {
    data: Data[]
    setting: any
}


export const useBoxStore = create<BoxStore>((set) => ({
    data: [
        {
            id: 'common',
            name: '常用推荐',
            icon: 'FCOrgUnit',
            list: [
                {
                    id: 'JSON',
                    name: 'CodePen1',
                    title: '开源的前端效果站',
                    url: 'https://google.com/',
                    logo: 'https://nankart.cn/img/gitee.png'
                },
                {
                    id: 'Calendar',
                    name: 'CodePen11',
                    title: '开源的前端效果站',
                    url: 'https://google.com/',
                    logo: 'https://nankart.cn/img/gitee.png'
                },
                {
                    id: 'CDN',
                    name: 'CodePen12',
                    title: '开源的前端效果站',
                    url: 'https://google.com/',
                    logo: 'https://nankart.cn/img/gitee.png'
                },
                {
                    id: 'Favorite',
                    name: 'CodePen13',
                    title: '开源的前端效果站',
                    url: 'https://google.com/',
                    logo: 'https://nankart.cn/img/gitee.png'
                },
            ]
        },
        {
            id: 'common1',
            name: '收藏网址',
            icon: 'FCFilmReel',
            list: [
                {
                    id: 'JSON',
                    name: 'CodePen1422',
                    title: '开源的前端效果站',
                    url: 'https://google.com/',
                    logo: 'https://nankart.cn/img/gitee.png',
                    isCollection: true,
                },
                {
                    id: 'Favorite',
                    name: 'CodePen1142',
                    title: '开源的前端效果站',
                    url: 'https://google.com/',
                    logo: 'https://nankart.cn/img/gitee.png'
                },
                {
                    id: 'CDN',
                    name: 'CodePen1342',
                    title: '开源的前端效果站',
                    url: 'https://google.com/',
                    logo: 'https://nankart.cn/img/gitee.png'
                },
                {
                    id: 'common',
                    name: 'CodePen1452',
                    title: '开源的前端效果站',
                    url: 'https://google.com/',
                    logo: 'https://nankart.cn/img/gitee.png'
                },
            ]
        },
        {
            id: 'common2',
            name: '前端工具',
            icon: 'FCLightAtTheEndOfTunnel',
            list: [
                {
                    id: 'CDN',
                    name: 'CodePen42',
                    title: '开源的前端效果站',
                    url: 'https://google.com/',
                    logo: 'https://nankart.cn/img/gitee.png'
                },
                {
                    id: 'common',
                    name: 'CodePen4',
                    title: '开源的前端效果站',
                    url: 'https://google.com/',
                    logo: 'https://nankart.cn/img/gitee.png'
                },
                {
                    id: 'common',
                    name: 'CodePen34',
                    title: '开源的前端效果站',
                    url: 'https://google.com/',
                    logo: 'https://nankart.cn/img/gitee.png'
                },
                {
                    id: 'common',
                    name: 'CodePen52',
                    title: '开源的前端效果站',
                    url: 'https://google.com/',
                    logo: 'https://nankart.cn/img/gitee.png'
                },
            ]
        },
        {
            id: 'common12',
            name: '字体图标',
            icon: 'FCMindMap',
            list: [
                {
                    id: 'common',
                    name: 'CodePen42',
                    title: '开源的前端效果站',
                    url: 'https://google.com/',
                    logo: 'https://nankart.cn/img/gitee.png'
                },
                {
                    id: 'common',
                    name: 'CodePen4',
                    title: '开源的前端效果站',
                    url: 'https://google.com/',
                    logo: 'https://nankart.cn/img/gitee.png'
                },
                {
                    id: 'common',
                    name: 'CodePen34',
                    title: '开源的前端效果站',
                    url: 'https://google.com/',
                    logo: 'https://nankart.cn/img/gitee.png'
                },
                {
                    id: 'common',
                    name: 'CodePen52',
                    title: '开源的前端效果站',
                    url: 'https://google.com/',
                    logo: 'https://nankart.cn/img/gitee.png'
                },
            ]
        },
        {
            id: 'common55',
            name: '源码专区',
            icon: 'FCPackage',
            list: [
                {
                    id: 'common',
                    name: 'CodePen42',
                    title: '开源的前端效果站',
                    url: 'https://google.com/',
                    logo: 'https://nankart.cn/img/gitee.png'
                },
                {
                    id: 'common',
                    name: 'CodePen4',
                    title: '开源的前端效果站',
                    url: 'https://google.com/',
                    logo: 'https://nankart.cn/img/gitee.png'
                },
                {
                    id: 'common',
                    name: 'CodePen34',
                    title: '开源的前端效果站',
                    url: 'https://google.com/',
                    logo: 'https://nankart.cn/img/gitee.png'
                },
                {
                    id: 'common',
                    name: 'CodePen52',
                    title: '开源的前端效果站',
                    url: 'https://google.com/',
                    logo: 'https://nankart.cn/img/gitee.png'
                },
            ]
        },
    ],
    setting: {},
    // setData: () => set((state) => ({ ...state, }))
}))
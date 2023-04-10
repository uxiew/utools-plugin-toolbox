import { TKFeature } from './types';

const components = import.meta.glob<true, string, () => JSX.Element>(
  './*/index.tsx',
  { import: 'default', eager: true }
);
const features: Record<string, (props: TKFeature) => JSX.Element> = {};

for (const path in components) {
  features[path.replace(/\.\/|\/index\.tsx/g, '')] = components[path];
}

export function FeatureComp(cardInfo: TKFeature) {
  const Comp = features[cardInfo.id];

  // 最小值为 1
  utools.setExpendHeight(cardInfo.mode === 'app' ? 660 : 1);

  return Comp ? (
    <Comp {...cardInfo} />
  ) : (
    <h1 className='text-center'> {cardInfo.name} 开发中...</h1>
  );
}

export default features;

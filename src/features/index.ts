import { FeatureProps } from "./types";

const components = import.meta.glob<true, string, () => JSX.Element>('./*/index.tsx', { import: 'default', eager: true })
const features: Record<string, (props: FeatureProps) => JSX.Element> = {};

for (const path in components) {
    features[path.replace(/\.\/|\/index\.tsx/g, '')] = components[path]
}

export default features;
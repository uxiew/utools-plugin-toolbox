import { createElement } from 'react';
import parse, { domToReact } from 'html-react-parser';
import { Element } from 'html-react-parser';
import type { HTMLReactParserOptions } from 'html-react-parser';

type ResultComp = (props?: any) => JSX.Element | JSX.Element;

type Components = Record<string, ResultComp>;

type Options = {
  html: string;
  components?: Components;
  componentOverrides?: Record<
    string,
    (comp: ResultComp) => (props?: any) => JSX.Element
  >;
};

const HTMLRenderer = ({
  html = '',
  components = {},
  componentOverrides = {}
}: Options) => {
  const resolvedComponents = Object.keys(componentOverrides).reduce(
    (acc, key) => {
      const Comp =
        components[key] || ((props: any) => createElement(key, props));
      acc[key] = componentOverrides[key](Comp);
      return acc;
    },
    { ...components }
  );

  const parserOptions: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element) {
        const { name, attribs, children: nodeChildren } = domNode;
        const children = nodeChildren
          ? domToReact(nodeChildren, parserOptions)
          : null;

        const Comp = resolvedComponents[name];

        if (!Comp) return;

        return createElement(Comp, { name, ...attribs }, children);
      } else return domNode;
    }
  };
  const COMP = parse(html, parserOptions);

  return typeof COMP === 'string' ? (
    <>COMP</>
  ) : Array.isArray(COMP) ? (
    <>{COMP.map((cp) => cp)}</>
  ) : (
    COMP
  );
};
export default HTMLRenderer;

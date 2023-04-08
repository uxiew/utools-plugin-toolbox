import { useEffect, useMemo } from 'react';
import Prism from 'prismjs';
// Import a theme.css
import './themes/material-light.scss';

export interface ICode {
  language?: string;
  children?: any;
  content?: any;
  lineNumbers?: boolean;
  className?: string;
}

function useCodeComponent() {
  const CodeComponent = ({
    language: lang = 'markup',
    children,
    content,
    lineNumbers,
    className
  }: ICode) => {
    const code = children || content;
    const HighlightCode = Prism.highlight(code, Prism.languages[lang], lang);

    return (
      <pre className={className}>
        <code
          className={`language-${lang} ${lineNumbers ? 'line-numbers' : ''}`}
          dangerouslySetInnerHTML={{ __html: HighlightCode }}
        ></code>
      </pre>
    );
  };

  const Code = useMemo(() => CodeComponent, []);
  return Code;
}

export default function usePrism() {
  const Code = useCodeComponent();

  const highlightAll = () => {
    Prism.highlightAll();
  };

  return {
    Code,
    highlightAll
  };
}

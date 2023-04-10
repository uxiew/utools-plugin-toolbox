import { Layout } from '@arco-design/web-react';
import { useState } from 'react';
import type { CSSProperties } from 'react';
import unicorn from './assets/unicorn.png';
import './style.scss';
import 'react-color-palette/lib/css/styles.css';
import LeftSider from './LeftSider';

export type CssVarsState = {
  '--blur'?: string;
  '--opacity'?: number;
  '--radius'?: string;
  '--outline'?: string;
  '--r'?: number;
  '--g'?: number;
  '--b'?: number;
};

export default function Glassmorphism() {
  const [cssVars, setStyle] = useState<CssVarsState>({
    '--blur': '11.5px',
    '--opacity': 0.45,
    '--radius': '10px',
    '--outline': '0',
    '--r': 231,
    '--g': 231,
    '--b': 231
  });

  return (
    <Layout className='relative h-screen' style={cssVars as CSSProperties}>
      <div className='glassmorphism_bg  absolute inset-x-0  inset-y-0'></div>
      {/* <h2>Glassmorphism CSS Generator</h2> */}
      <Layout.Sider className='generate flex relative' width='320px'>
        <LeftSider setStyle={setStyle} cssVars={cssVars} />
      </Layout.Sider>
      <Layout.Content className='generate_preview relative flex'>
        <div
          // ref={(node) => (curst.current = node)}
          className='w-[385px] h-[260px] flex flex-col justify-center items-center self-center m-auto rounded-[20px] -rotate-[15deg]         generate_preview-outer preview'
        >
          {/* alt='Pixie - Frontend Unicorn book'   */}
          <img
            src={unicorn}
            className='w-[120px] h-[120px] rounded-full mx-0 mt-0 mb-5'
          />
          <h2>Pixie</h2>
          <p>The Frontend Unicorn</p>
        </div>

        {/* 小圆 */}
        <div className='sphere sphere1'></div>
        <div className='sphere sphere2'></div>
        <div className='sphere sphere3'></div>
        <div className='sphere sphere4'></div>

        {/* 小方块 */}
        <div className='square square2 preview'>🦄</div>
        <div className='square square3 preview'>🔥</div>
        <div className='square square6 preview'>🤩</div>
        <div className='preview square square8 flex justify-center items-center flex-col rounded-[20px] -rotate-15'>
          <div className='btn flex justify-center items-center rounded-full'>
            +
          </div>
          <span className='relative top-4'>Add to friends</span>
        </div>
      </Layout.Content>
    </Layout>
  );
}

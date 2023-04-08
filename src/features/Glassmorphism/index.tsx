import {
  Form,
  Slider,
  Typography,
  Switch,
  Button,
  Layout
} from '@arco-design/web-react';
import { useRef, useState, useMemo } from 'react';
import type { CSSProperties } from 'react';
import usePrism from '../../hooks/prism';
import unicorn from './assets/unicorn.png';
import './style.scss';
import { ColorPicker, useColor, Color } from 'react-color-palette';
import 'react-color-palette/lib/css/styles.css';
import { useClickAway } from 'ahooks';

const FormItem = Form.Item;

const { Sider, Content } = Layout;
type StyleState = {
  '--blur'?: string;
  '--opacity'?: number;
  '--radius'?: string;
  '--outline'?: string;
  '--r'?: number;
  '--g'?: number;
  '--b'?: number;
};

export default function Glassmorphism() {
  const { Code } = usePrism();

  const colorPickerRef = useRef(null);
  const [displayColorPicker, setColorPicker] = useState(false);

  const [cssVars, setStyle] = useState<StyleState>({
    '--blur': '11.5px',
    '--opacity': 0.45,
    '--radius': '10px',
    '--outline': '0',
    '--r': 231,
    '--g': 231,
    '--b': 231
  });

  useClickAway(
    (e) => {
      console.log(e, displayColorPicker, colorPickerRef.current);
      if (
        (e.target as HTMLButtonElement).classList.contains('colorPickerBtn')
      ) {
        return;
      }
      if (displayColorPicker) setColorPicker(false);
    },
    () => colorPickerRef.current
  );

  const [color, setColor] = useColor('rgb', {
    r: 231,
    g: 231,
    b: 231
  });

  const getRGB = (needOpacity: boolean = false) =>
    `rgba(${cssVars['--r']}, ${cssVars['--g']}, ${cssVars['--b']}${
      needOpacity ? `, ${cssVars['--opacity']}` : ''
    })`;

  const copyData = () =>
    `background-color: ${getRGB(true)};
  backdrop-filter: blur(${cssVars['--blur']});
  border-radius: ${cssVars['--radius']};
  ${
    cssVars['--outline'] === '0'
      ? ''
      : 'outline: 1px solid rgba( 255, 255, 255, .62 );'
  }`
      .replace(/;\s+/g, ';')
      .split(';')
      .join(';\n');

  const onChangeColor = (color: Color) => {
    const { r, g, b } = color.rgb;
    setStyle((s) => ({
      ...s,
      '--r': r,
      '--g': g,
      '--b': b
    }));
    setColor(color);
  };

  const onChange = (attr: string, val: any) => {
    console.log(cssVars, attr, val);
    let state: StyleState = {};

    setStyle((s) => {
      switch (attr) {
        case 'blur':
          state['--blur'] = val + 'px';
          break;
        case 'radius':
          // if (s.borderRadius === `${val}px`) return s;
          state['--radius'] = val + 'px';
          break;
        case 'outline':
          // if (s.borderRadius === `${val}px`) return s;
          state['--outline'] = val ? '1px' : '0';
          break;
        case 'opacity':
          // if (s.borderRadius === `${val}px`) return s;
          state['--opacity'] = val;
          break;

        default:
          break;
      }
      return {
        ...s,
        ...state
      };
    });
  };

  return (
    <Layout className='relative h-screen' style={cssVars as CSSProperties}>
      <div className='glassmorphism_bg  absolute inset-x-0  inset-y-0'></div>
      {/* <h2>Glassmorphism CSS Generator</h2> */}
      <Sider className='generate flex relative' width='320px'>
        <div className='generate_control' style={{ width: '320px' }}>
          <h2>SETTINGS</h2>
          <Form layout='vertical' autoComplete='off'>
            <FormItem label='Blur'>
              <Slider
                defaultValue={12.5}
                step={0.1}
                max={20}
                onChange={(val) => onChange('blur', val)}
              />
            </FormItem>
            <FormItem label='Transparency'>
              <Slider
                defaultValue={0.45}
                step={0.01}
                max={1}
                onChange={(val) => onChange('opacity', val)}
              />
            </FormItem>
            <FormItem label='Border Radius'>
              <Slider
                defaultValue={10}
                max={60}
                onChange={(val) => onChange('radius', val)}
              />
            </FormItem>

            <div className='relative'>
              <span className='mr-2'>Color</span>
              <Button
                className='mr-6 !border-0 colorPickerBtn'
                type='outline'
                style={{
                  backgroundColor: getRGB()
                }}
                onClick={() => setColorPicker(!displayColorPicker)}
              ></Button>
              {displayColorPicker && (
                <div className='absolute z-10' ref={colorPickerRef}>
                  <ColorPicker
                    width={240}
                    height={68}
                    color={color}
                    onChange={onChangeColor}
                    hideHSV
                    hideHEX
                    dark
                  />
                </div>
              )}
              <span className='mr-2'>Outline</span>
              <Switch onChange={(val: any) => onChange('outline', val)} />
            </div>
          </Form>
        </div>
        <div className='generate_output'>
          <h2>
            <span>CSS</span>
            <Button
              className='ml-2'
              type='outline'
              onClick={() => utools.copyText(copyData())}
            >
              Copy
            </Button>
          </h2>
          <Code className='highlight-code' language='css'>
            {copyData()}
          </Code>
        </div>
      </Sider>

      <Content className='generate_preview relative flex'>
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
      </Content>
    </Layout>
  );
}

import { Form, Slider, Switch, Button, Layout } from '@arco-design/web-react';
import { ColorPicker, useColor } from 'react-color-palette';
import type { Color } from 'react-color-palette';
import usePrism from '../../hooks/prism';
import type { CssVarsState } from '.';
import { useRef, useState } from 'react';
import { useClickAway } from 'ahooks';

const FormItem = Form.Item;

type Props = {
  cssVars: CssVarsState;
  setStyle: React.Dispatch<React.SetStateAction<CssVarsState>>;
};

function LeftSider({ cssVars, setStyle }: Props) {
  const { Code } = usePrism();
  const colorPickerRef = useRef(null);
  const [displayColorPicker, setColorPicker] = useState(false);
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

  useClickAway(
    (e) => {
      if (
        (e.target as HTMLButtonElement).classList.contains('colorPickerBtn')
      ) {
        return;
      }
      if (displayColorPicker) setColorPicker(false);
    },
    () => colorPickerRef.current
  );

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
    let state: CssVarsState = {};

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
    <>
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
    </>
  );
}

export default LeftSider;

import { Form, Slider, Layout } from '@arco-design/web-react';
import { useRef, useState } from 'react';
import unicorn from './assets/unicorn.png';
import './style.scss';

const FormItem = Form.Item;

const { Sider, Content, Footer } = Layout;
type Props = {};

export default function Glassmorphism({}: Props) {
  const curst = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({
    background: 'rgba(231, 231, 231, 0.4)',
    border: 'none',
    backdropFilter: 'blur(11.5px)'
  });

  return (
    <Layout className='relative h-screen'>
      <div className='glassmorphism_bg  absolute inset-x-0  inset-y-0'></div>
      {/* <h2>Glassmorphism CSS Generator</h2> */}
      <Sider className='generate flex relative'>
        <div className='generate_control'>
          <Form layout='vertical' autoComplete='off'>
            <FormItem label='Blur' field='name'>
              <Slider style={{ width: 200 }} />
            </FormItem>
            <FormItem label='Transparency' field='gender'>
              <Slider style={{ width: 200 }} />
            </FormItem>
            <FormItem label='Gender' field='gender'>
              <Slider style={{ width: 200 }} />
            </FormItem>
          </Form>
        </div>

        <div className='generate_output'>{/* code */}</div>
      </Sider>
      <Content className='preview relative flex'>
        <div
          ref={curst}
          className='w-[385px] h-[260px] flex flex-col justify-center items-center self-center m-auto rounded-[20px] -rotate-[15deg] preview-outer'
          style={style}
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
        <div className='square square2' style={style}>
          🦄
        </div>
        <div className='square square3' style={style}>
          🔥
        </div>
        <div className='square square6' style={style}>
          🤩
        </div>
        <div
          className='square square8 flex justify-center items-center flex-col rounded-[20px] -rotate-15'
          style={style}
        >
          <div className='btn flex justify-center items-center rounded-full'>
            +
          </div>
          <span className='relative top-4'>Add to friends</span>
        </div>
      </Content>
    </Layout>
  );
}

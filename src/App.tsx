import { useState } from 'react';
import './App.scss';
import Container from './components/Container';
import { Anchor, Button, Layout } from '@arco-design/web-react';
import Sidebar from './components/Sidebar';
import { IconLeft } from '@arco-design/web-react/icon';

const Sider = Layout.Sider;
const Content = Layout.Content;

function App() {
  const [count, setCount] = useState(0);

  const [menuCollapse, setMenuCollapse] = useState(false);

  utools.setSubInput(
    (text: string) => {
      console.log(text);
    },
    '搜索🔍',
    true
  );

  return (
    <Layout className='app'>
      <Sider
        theme='light'
        collapsed={menuCollapse}
        width={150}
        className='box-slider'
      >
        <Anchor lineless>
          <Sidebar />
        </Anchor>
      </Sider>
      <Button
        className={`box-menu-collapse-btn ${
          menuCollapse ? 'box-menu-collapse-btn-close' : ''
        }`}
        icon={<IconLeft />}
        shape='circle'
        size='mini'
        onClick={() => {
          setMenuCollapse(!menuCollapse);
        }}
      />
      <Content className='box-wrapper'>
        <Container />
      </Content>
      {/* <Col flex='auto'>
          <Content className='box-container'>
            <Container />
          </Content>
        </Col> */}
    </Layout>
  );
}

export default App;

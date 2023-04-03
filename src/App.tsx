import { useState } from 'react';
import './App.scss';
import Container from './components/Container';
import { Anchor, Grid, Layout } from '@arco-design/web-react';
import Sidebar from './components/Sidebar';
const Row = Grid.Row;
const Col = Grid.Col;
const Sider = Layout.Sider;
const Content = Layout.Content;

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout className='app'>
      <Sider theme='light' collapsible>
        <Anchor affix={true} hash={false} lineless={true}>
          <Sidebar />
        </Anchor>
      </Sider>
      <Content className='box-container'>
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

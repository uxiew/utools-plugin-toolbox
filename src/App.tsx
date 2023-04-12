import { useState } from 'react';
import './App.scss';
import Container from './components/Container';
import { Button, Layout } from '@arco-design/web-react';
import { IconLeft } from '@arco-design/web-react/icon';
import useFeature from '@/hooks/feature';
import { getCardInfoByCode } from './common';
import { useSetState } from 'ahooks';
import { FeatureComp } from './features';
import AppSide from './App.side';

let asarServer: {
  url: string;
};

function App() {
  const { getFeature } = useFeature();

  const [state, setState] = useSetState({
    code: '',
    theme: window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  });

  const [menuCollapse, setMenuCollapse] = useState(false);

  utools.onPluginEnter(({ type, code, payload }) => {
    console.log(type, code, payload);
    const { id } = getCardInfoByCode(state.code);
    if (code.endsWith('#app')) {
      // TODO 需要标记使用了 asar server
      // asarServer = window.preload.startAsarServer(
      //   window.preload.readAsarFile(id)
      // );
    }
    setState({ ...state, code });
  });

  utools.onPluginOut((processExit) => {
    console.log('onPluginOut', processExit);
  });

  return state.code === '' ? null : state.code === '!!!toolkit' ? (
    <Layout className='app'>
      <Layout.Sider
        theme='light'
        collapsed={menuCollapse}
        width={150}
        className='kit-slider'
      >
        <AppSide />
      </Layout.Sider>

      <Button
        className={`kit-menu-collapse-btn ${
          menuCollapse ? 'kit-menu-collapse-btn-close' : ''
        }`}
        icon={<IconLeft />}
        shape='circle'
        size='mini'
        onClick={() => {
          setMenuCollapse(!menuCollapse);
        }}
      />
      <Layout.Content className='kit-wrapper'>
        <Container />
      </Layout.Content>
    </Layout>
  ) : (
    <FeatureComp {...getFeature(getCardInfoByCode(state.code))} />
  );
}

export default App;

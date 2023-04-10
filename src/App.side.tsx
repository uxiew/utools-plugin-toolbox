import { useState } from 'react';
import { Anchor, Layout } from '@arco-design/web-react';
import Sidebar from './components/Sidebar';
import useApp from './hooks/app';

const Sider = Layout.Sider;
type Props = {};

export default function AppSide({}: Props) {
  const { init } = useApp();
  // 主界面
  init();

  return (
    <Anchor affixStyle={{ position: 'fixed' }} lineless>
      <Sidebar />
    </Anchor>
  );
}

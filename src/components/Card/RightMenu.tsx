import { Menu } from '@arco-design/web-react';
import type { FeatureProps } from './types';

export default function RightMenu({
  id,
  cateIndex,
  index,
  cmds,
  mode
}: FeatureProps) {
  const menus = [
    {
      id: 'add',
      name: '添加'
    }
  ];

  const setPluginFeature = () => {
    // TODO 每个 feature 都需要配置 feature 快捷打开，或者禁止
    return utools.setFeature({
      code: `${id}#${cateIndex}#${index}#${mode}`,
      explain: '222hosts切换',
      // "icon": "res/xxx.png",
      // "icon": "data:image/png;base64,xxx...",
      platform: ['win32', 'darwin', 'linux'],
      // 默认会添加 id 到关键字
      cmds: cmds.concat([id])
    });
  };

  return (
    <Menu>
      <Menu.Item key='0'>添加</Menu.Item>
      {/* TODO 判断一下是否需要 */}
      <Menu.Item key='1'>编辑</Menu.Item>
      <Menu.Item key='2' onClick={setPluginFeature}>
        网页快开
      </Menu.Item>
      {/* <Menu.Item key='2'>快捷启动</Menu.Item> */}
      <Menu.Item key='3'>删除</Menu.Item>
    </Menu>
  );
}

import { Anchor, Menu } from '@arco-design/web-react';

const AnchorLink = Anchor.Link;
const MenuItem = Menu.Item;

type Props = {};
export default function Sidebar(prop: Props) {
  const categories = [
    { id: 'common', name: '常用推荐', icon: 'xx' },
    { id: 'Basic', name: '源码专区', icon: 'xx' },
    { id: 'Static', name: '在线工具', icon: 'xx' },
    { id: 'Lineless', name: '字体图标', icon: 'xx' },
    { id: 'Affix', name: '学习交流', icon: 'xx' },
    { id: 'Hash', name: '关于作者', icon: 'xx' },
    { id: 'common', name: '关于你', icon: 'xx' }
  ];
  return (
    <Menu defaultOpenKeys={['1']} defaultSelectedKeys={['0_3']}>
      {categories.map(({ id, name, icon }, i) => (
        <MenuItem key={id + i}>
          <AnchorLink href={'#' + id} title={name} />
        </MenuItem>
      ))}
    </Menu>
  );
}

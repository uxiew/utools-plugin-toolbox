import { Menu } from '@arco-design/web-react';

type Props = {};
export default function RightMenu(props: Props) {
  const menus = [
    {
      id: 'add',
      name: '添加'
    }
  ];

  return (
    <Menu defaultOpenKeys={['0']} defaultSelectedKeys={['0']}>
      <Menu.Item key='1'>添加</Menu.Item>
      {/* TODO 判断一下是否需要 */}
      <Menu.Item key='2'>网页快开</Menu.Item>
      <Menu.Item key='3'>启用/禁用</Menu.Item>
      <Menu.Item key='4'>删除</Menu.Item>
    </Menu>
  );
}

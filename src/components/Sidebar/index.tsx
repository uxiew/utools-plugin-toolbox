import { Anchor, Menu, Grid } from '@arco-design/web-react';
import * as FCIcons from '@icongo/fc';
import { useRef } from 'react';
import './style.scss';

const AnchorLink = Anchor.Link;
const MenuItem = Menu.Item;
const { Row, Col } = Grid;

type Props = {};
export default function Sidebar(prop: Props) {
  const categories = [
    { id: 'common', name: '常用推荐', icon: 'FCNews' },
    { id: 'Basic', name: '收藏网址', icon: 'FCFilmReel' },
    { id: 'Static', name: '前端工具', icon: 'FCLightAtTheEndOfTunnel' },
    { id: 'Lineless', name: '字体图标', icon: 'FCMindMap' },
    { id: 'Affix', name: '学习交流', icon: 'FCShop' },
    { id: 'Hash', name: '关于作者', icon: 'FCServices' },
    { id: 'common1', name: '关于你', icon: 'FCSportsMode' },
    { id: 'common2', name: '常用推荐', icon: 'FCNews' },
    { id: 'Basic1', name: '源码专区', icon: 'FCPackage' }
  ];

  return (
    <Menu
      defaultOpenKeys={['1']}
      defaultSelectedKeys={['0_3']}
      style={{ height: '100vh' }}
    >
      {categories.map(({ id, name, icon }, i) => {
        // @ts-ignore
        const Icon = FCIcons[icon];
        return (
          <MenuItem key={id + i} className='box-menu'>
            {/* <Col span={5} > */}
            <Icon className='box-menu-icon'></Icon>
            {/* </Col> */}
            <AnchorLink
              className='box-menu-link'
              href={'#' + id}
              title={name}
              style={{ marginBottom: 0 }}
            />
          </MenuItem>
        );
      })}
    </Menu>
  );
}

import { Anchor, Menu } from '@arco-design/web-react';
import * as FCIcons from '@icongo/fc';
import { useBoxStore } from '../../store';
import './style.scss';

const AnchorLink = Anchor.Link;
const MenuItem = Menu.Item;

type Props = {};
export default function Sidebar(prop: Props) {
  const { data } = useBoxStore();

  return (
    <Menu tooltipProps={{ disabled: true }} className='h-screen'>
      {data.map(({ id, name, icon }, i) => {
        // @ts-ignore
        const Icon = FCIcons[icon];
        return (
          <MenuItem key={id + i} className='box-menu'>
            <Icon className='box-menu-icon'></Icon>
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

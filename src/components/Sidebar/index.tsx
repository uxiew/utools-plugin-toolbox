import { Anchor, Menu } from '@arco-design/web-react';
import * as FCIcons from '@icongo/fc';
import { useKitStore } from '../../store';
import './style.scss';

const AnchorLink = Anchor.Link;
const MenuItem = Menu.Item;

type Props = {};
export default function Sidebar(prop: Props) {
  const { data } = useKitStore();

  return (
    <Menu tooltipProps={{ disabled: true }} className='h-screen'>
      {data.map(({ id, name, icon }, i) => {
        // @ts-ignore
        const Icon = FCIcons[icon];
        return (
          <MenuItem key={id + i} className='kit-menu'>
            <Icon className='kit-menu-icon'></Icon>
            <AnchorLink
              className='kit-menu-link'
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

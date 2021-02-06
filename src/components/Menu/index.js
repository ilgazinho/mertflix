import { MenuItem } from '../MenuItem/index';

const menus = ['Home', 'About', 'More'];

export const Menu = () => {
  return (
    <div className="menu">
      <ul className="menu-items">
        {menus.map((menuItem) => (
          <MenuItem>{menuItem}</MenuItem>
        ))}
      </ul>
    </div>
  );
};

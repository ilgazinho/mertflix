import { MenuItem } from '../MenuItem/index';

const menus = ['Movies', 'Series', 'More'];

export const Menu = () => {
  return (
    <div className="menu">
      <ul className="menu-items">
        {menus.map((menuItem, index) => (
          <MenuItem key={index}>{menuItem}</MenuItem>
        ))}
      </ul>
    </div>
  );
};

import { MenuItem } from '../MenuItem/index';

const menus = ['Movies', 'Series', 'More'];

export const Menu = (props) => {
  const onChangeSearchVal = (val) => {
    props.handleNavSearch(val);
  };
  return (
    <div className="menu">
      <div className="search">
        <input
          type="search"
          placeholder="Search"
          onChange={(e) => onChangeSearchVal(e.target.value)}
        />
      </div>
      <ul className="menu-items">
        {menus.map((menuItem, index) => (
          <MenuItem key={index}>{menuItem}</MenuItem>
        ))}
      </ul>
    </div>
  );
};

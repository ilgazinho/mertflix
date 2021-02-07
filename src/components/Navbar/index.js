import { Logo } from '../Logo/index';
import { Menu } from '../Menu/index';

export const Navbar = (props) => {
  return (
    <div className="navbar">
      <Logo />
      <Menu handleNavSearch={props.handleSearch} />
    </div>
  );
};

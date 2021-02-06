import logo from '../../assets/images/logo.png';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu">
        <ul className="items">
          <li className="item">
            <a href="#Home">Home</a>
          </li>
          <li className="item">
            <a href="#About">About</a>
          </li>
          <li className="item">
            <a href="#More">More</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

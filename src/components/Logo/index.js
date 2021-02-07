import logo from '../../assets/images/logo.png';

export const Logo = (props) => {
  return (
    <div className="logo" onClick={props.handleLogoClick}>
      <a href="Discover">
        <img src={logo} alt="Logo" />
      </a>
    </div>
  );
};

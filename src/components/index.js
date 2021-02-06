import { Movies } from './Movies/index';
import { Navbar } from './Navbar/index';

export const Main = () => {
  return (
    <div className="main">
      <Navbar />
      <Movies />
    </div>
  );
};

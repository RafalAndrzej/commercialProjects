import PopUp from '../menuList';

import classes from './index.module.css';

const DesktopNav: React.FC = () => {
   return (
      <nav className={classes.nav}>
         <PopUp className="desktop"></PopUp>
      </nav>
   );
};

export default DesktopNav;

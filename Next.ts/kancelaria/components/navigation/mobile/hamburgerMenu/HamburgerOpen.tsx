import { useContext } from 'react';
import MenuContext from '../../../../context/menuContext';

import classes from './HamburgerOpen.module.css';

const HamburgerOpen: React.FC = () => {
   const menuCtx = useContext(MenuContext);

   return (
      <button onClick={menuCtx.menuVisibleHandler} className={classes.mobileMenu}>
         <span></span>
         <span></span>
         <span></span>
      </button>
   );
};

export default HamburgerOpen;

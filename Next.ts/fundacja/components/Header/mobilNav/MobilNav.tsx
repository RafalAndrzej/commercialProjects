import { useContext } from 'react';
import MobileMenuContext from '../../../context/mobilMenuContext';

import classes from './MobiNav.module.css';

const MobilNav: React.FC = () => {
   const mobilMenuCtx = useContext(MobileMenuContext);

   function mobileMenuOpenHandler() {
      mobilMenuCtx.setMobileMenuIsOpen(true);
   }

   return mobilMenuCtx.mobileMenuIsOpen ? (
      <button
         className={`${classes.mobile} ${classes['mobile-open']}`}
         onClick={mobilMenuCtx.closeMobilMenuHandler as React.MouseEventHandler<HTMLButtonElement>}>
         <div>
            <span></span>
            <span></span>
         </div>
      </button>
   ) : (
      <button className={`${classes.mobile} ${classes['mobile-close']}`} onClick={mobileMenuOpenHandler}>
         <div>
            <span></span>
            <span></span>
            <span></span>
         </div>
      </button>
   );
};

export default MobilNav;

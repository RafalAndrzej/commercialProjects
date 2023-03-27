import Image from 'next/image';

import { PropsChildren } from '../../types/globalTypes';

import classes from './AsideMenu.module.css';

const AsideMenu: React.FC<PropsChildren> = ({ children }) => {
   return (
      <div className={`${classes['aside-menu']} ${classes.opening}`}>
         <div className={classes.box}>
            <Image src={'/images/fundacja_logo.jpg'} width={80} height={80} alt="Logo Fundacj Family"></Image>
            {children}
         </div>
      </div>
   );
};

export default AsideMenu;

import { useContext, useEffect } from 'react';

import DeviceContex from '../../context/deviceType.Context';
import MenuContext from '../../context/menuContext';

import MobileNav from '../navigation/mobile';
import PopUp from '../navigation/menuList';
import Footer from '../footer';

import { PropsChildren } from '../../types/globalTypes';
import classes from './Layout.module.css';
import DesktopNav from '../navigation/desktop';

const Layout: React.FC<PropsChildren> = ({ children }) => {
   const deviceCtx = useContext(DeviceContex);
   const menuCtx = useContext(MenuContext);

   useEffect(() => {
      deviceCtx.setDeviceTypeIsPhone(window.innerWidth < 1000);
      window.addEventListener('resize', () => deviceCtx.setDeviceTypeIsPhone(window.innerWidth < 1000));

      return () => {
         window.removeEventListener('resize', () => deviceCtx.setDeviceTypeIsPhone(window.innerWidth < 1000));
      };
   }, [deviceCtx]);

   if (deviceCtx.deviceTypeIsPhone) {
      /* Mobil Layout */
      return menuCtx.menuVisible ? (
         <div className={`${classes.wrapper} ${classes['wrapper-mobile']}`}>
            <MobileNav menuState={menuCtx.menuVisible} />
            <PopUp onClickMenu={menuCtx.menuVisibleHandler} className="mobile" />
         </div>
      ) : (
         <div className={`${classes.wrapper} ${classes['wrapper-mobile']}`}>
            <MobileNav menuState={menuCtx.menuVisible} />
            <main>{children}</main>
            <Footer />
         </div>
      );
   } else {
      /* Desktop layout */
      return (
         <div className={classes.wrapper}>
            <DesktopNav />
            {menuCtx.subMenuVisible ? (
               <>
                  <main onClick={menuCtx.subMenuVisibleHandler}>{children}</main>
                  <Footer closeSubMenu={menuCtx.subMenuVisibleHandler} />
               </>
            ) : (
               <>
                  <main>{children}</main>
                  <Footer />
               </>
            )}
         </div>
      );
   }
};

export default Layout;

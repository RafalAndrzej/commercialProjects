import { useContext } from 'react';
import fontFamily from '../../helpers/fontFamily';

import MobileMenuContext from '../../context/mobilMenuContext';
import usePageSettings from '../../hooks/usePageSettings';

import Header from '../Header';
import PageList from '../Header/pageList';
import AsideMenu from './AsideMenu';

import { PropsChildren } from '../../types/globalTypes';
import classes from './index.module.css';
import assideClass from './AsideMenu.module.css';
import Footer from '../footer/Footer';

const Layout: React.FC<PropsChildren> = ({ children }) => {
   const mobileMenuCtx = useContext(MobileMenuContext);

   // setting device type
   usePageSettings();

   function closingMobilMenu(event: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>) {
      const mainPageElement = event.currentTarget.closest(`.${classes['page-position']}`);
      mainPageElement!.classList.replace(classes.opening, classes.closing);

      const mobilMenuPageElement = document.querySelector(`.${assideClass['aside-menu']}`);
      mobilMenuPageElement?.classList.replace(assideClass.opening, assideClass.closing);

      mobileMenuCtx.closeMobilMenuHandler(event);
   }

   if (mobileMenuCtx.mobileMenuIsOpen) {
      return (
         <div className={classes.menuIsOpen}>
            <AsideMenu>
               <PageList />
            </AsideMenu>
            <div
               className={`${classes['page-size']} ${fontFamily.className} ${classes['page-position']} ${classes['overflow-hidden']} ${classes.opening}`}
               onClick={closingMobilMenu}>
               <Header />
               <main className={classes['main-box']}>
                  {children}
                  <div className={classes.box}>
                     <strong>Razem jesteśmy w stanie pomagać</strong> - <span>dziękujemy!</span>
                  </div>
               </main>
               <Footer />
            </div>
         </div>
      );
   } else {
      return (
         <>
            <div className={`${classes['page-size']} ${fontFamily.className} ${classes['page-position']}`}>
               <Header />
               <main className={classes['main-box']}>
                  {children}
                  <div className={classes.box}>
                     <strong>Razem jesteśmy w stanie pomagać</strong> - <span>dziękujemy!</span>
                  </div>
               </main>
               <Footer />
            </div>
         </>
      );
   }
};

export default Layout;

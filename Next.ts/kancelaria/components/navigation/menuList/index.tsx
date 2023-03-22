import Image from 'next/image';
import { useRouter } from 'next/router';

import React, { useContext } from 'react';
import DeviceContex from '../../../context/deviceType.Context';
import MenuContext from '../../../context/menuContext';

import classes from './index.module.css';
import PopUpLink from './MenuListLink';

const PopUp: React.FC<{ onClickMenu?: () => void; className: string }> = (props) => {
   const deviceCtx = useContext(DeviceContex);
   const menuCtx = useContext(MenuContext);

   const router = useRouter();

   function subMenuHandler() {
      menuCtx.subMenuVisibleHandler();
   }

   const currentPage = (page: string) => {
      if (
         (!deviceCtx.deviceTypeIsPhone && page === router.asPath.slice(1, router.asPath.lastIndexOf('/'))) ||
         (!deviceCtx.deviceTypeIsPhone && page === router.asPath.slice(1))
      ) {
         return `${classes.items} ${classes['item-active']}`;
      } else {
         return `${classes.items}`;
      }
   };

   return (
      <ul className={`${classes.menuList} ${classes[props.className]}`}>
         {!deviceCtx.deviceTypeIsPhone && (
            <PopUpLink href="/">
               <Image src="/img/smallLogo/5Tnf9dVT9W780nnS.png" alt="Small Logo" width={60} height={70} />
            </PopUpLink>
         )}
         <li className={currentPage('oNas')}>
            <PopUpLink href="/oNas">O nas</PopUpLink>
         </li>
         <li
            className={!deviceCtx.deviceTypeIsPhone ? currentPage('czynnosci') : undefined}
            onClick={subMenuHandler}>
            <button
               className={`${
                  !deviceCtx.deviceTypeIsPhone ? classes['items-desktop'] : classes['items-mobil']
               }  ${menuCtx.subMenuVisible ? `${classes.items} ${classes['item-active']}` : classes.items}`}>
               {menuCtx.subMenuVisible ? (
                  <>
                     <span>Czynności</span>
                     <div className={classes.box}>
                        <div>
                           <PopUpLink href="/czynnosci">Czynności</PopUpLink>
                        </div>
                        <div>
                           <PopUpLink href="/czynnosci/nieruchomosci">Nieruchomości</PopUpLink>
                        </div>
                        <div>
                           <PopUpLink href="/czynnosci/dziedziczenie">Dziedziczenie</PopUpLink>
                        </div>
                        <div>
                           <PopUpLink href="/czynnosci/prawo-rodzinne">Prawo rodzinne</PopUpLink>
                        </div>
                        <div>
                           <PopUpLink href="/czynnosci/spolki">Spółki i inne osoby prawne</PopUpLink>
                        </div>
                        <div>
                           <PopUpLink href="/czynnosci/inne">Inne</PopUpLink>
                        </div>
                     </div>
                  </>
               ) : (
                  <span>Czynności</span>
               )}
            </button>
         </li>

         <li className={currentPage('oplaty')}>
            <PopUpLink href="/oplaty">Opłaty</PopUpLink>
         </li>
         <li className={currentPage('czytelnia')}>
            <PopUpLink href="/czytelnia">Czytelnia</PopUpLink>
         </li>

         <li className={currentPage('kontakt')}>
            <PopUpLink href="/kontakt">Kontakt</PopUpLink>
         </li>
      </ul>
   );
};

export default PopUp;

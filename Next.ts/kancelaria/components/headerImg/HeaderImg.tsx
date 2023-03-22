import React, { useContext } from 'react';
import DeviceContex from '../../context/deviceType.Context';

import classes from './HeaderImg.module.css';

const HeaderImg: React.FC<{ currentPage: string; height: string }> = ({ currentPage, height }) => {
   const deviceCtx = useContext(DeviceContex);

   return (
      <React.Fragment>
         {deviceCtx.deviceTypeIsPhone ? (
            <>
               <section style={{ height: height }} className={classes.header}>
                  <h1 className="header">Notariusze Sokolska</h1>
                  {currentPage === '' && <div className={classes.bgIndexBox}></div>}
                  {currentPage === 'kontakt' && <div className={classes.bgKontaktBox}></div>}
               </section>
               <div className={classes.instagram}>
                  <a href={'https://www.instagram.com/szpilkiwnotariacie/'} target="_blank" rel="noreferrer">
                     Instagram
                  </a>
               </div>
            </>
         ) : (
            <div
               style={{ height: height }}
               className={currentPage === '' ? `${classes.header} ${classes.index}` : classes.header}>
               {currentPage === '' && <div className={classes.bgIndexBox}></div>}
               {currentPage === 'kontakt' && <div className={classes.bgKontaktBox}></div>}
            </div>
         )}
      </React.Fragment>
   );
};

export default HeaderImg;

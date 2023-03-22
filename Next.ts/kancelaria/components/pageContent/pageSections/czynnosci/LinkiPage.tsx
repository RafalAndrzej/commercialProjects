import React from 'react';

import classes from '../pageSectionsText.module.css';
import pageClasses from './index.module.css';

const LinkiPage: React.FC = () => {
   return (
      <React.Fragment>
         <h3 className={classes.header}>Przydatne Linki</h3>
         <ul className={pageClasses.linkList}>
            <li>
               <a href="#" target="_blank" rel="noreferrer">
                  Krajowa Rada Notarialna
               </a>
            </li>
            <li>
               <a href="#" target="_blank" rel="noreferrer">
                  Izba Notarialna w Katowicach
               </a>
            </li>
            <li>
               <a href="#" target="_blank" rel="noreferrer">
                  Ministerstwo Sprawiedliwości
               </a>
            </li>
            <li>
               <a href="#" target="_blank" rel="noreferrer">
                  Elektroniczna Księga Wieczysta
               </a>
            </li>
            <li>
               <a href="#" target="_blank" rel="noreferrer">
                  Krajowy Rejestr Sądowniczy
               </a>
            </li>
            <li>
               <a href="#" target="_blank" rel="noreferrer">
                  Centralna Informacja o Działalności Gospodarczej
               </a>
            </li>
            <li>
               <a href="#" target="_blank" rel="noreferrer">
                  Sąd Najwyższy
               </a>
            </li>
         </ul>
      </React.Fragment>
   );
};

export default LinkiPage;

import React from 'react';

import { DataStructureOplaty } from '../../../../types/oplatyTypes';

import classes from '../pageSectionsText.module.css';
import pageClasses from './index.module.css';

const PageContentOplaty: React.FC<{ pageText: DataStructureOplaty[] }> = ({ pageText }) => {
   return (
      <React.Fragment>
         {pageText.map(function (el, i) {
            if (el.assideText) {
               return (
                  <div className={pageClasses.box} key={i}>
                     <p className={classes.text}>{el.mainText}</p>
                     <ul>
                        {el.assideText.map((el, i) => (
                           <li key={i}>
                              <p className={pageClasses.textWithLink}>{el.text} </p>
                              <a href={el.downloadLink} rel="noreferrer" target="_blank">
                                 ( pobierz )
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>
               );
            }
            if (el.assideTextList) {
               return (
                  <div className={pageClasses.box} key={i}>
                     <p className={classes.text}>{el.mainText}</p>
                     <ul>
                        {el.assideTextList.map((el, i) => (
                           <li key={i}>
                              <p>{el} </p>
                           </li>
                        ))}
                     </ul>
                  </div>
               );
            }
            return (
               <p key={i} className={classes.text}>
                  {el.mainText}
               </p>
            );
         })}
      </React.Fragment>
   );
};

export default PageContentOplaty;

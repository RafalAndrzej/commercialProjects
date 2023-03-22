import React, { useContext } from 'react';

import CzytelniaContext from '../../../../context/czytelniaContext';
import { BlurDataStructureCzytelnia } from '../../../../types/czytelniaTypes';

import BoxWithLine from '../../BoxWithLine';
import pageClasses from './index.module.css';
import SingleEvent from './SingleEvent';

import classes from '../pageSectionsText.module.css';

const AllEvents: React.FC<{
   pageContent: BlurDataStructureCzytelnia[];
}> = (props) => {
   const czytelniaCtx = useContext(CzytelniaContext);

   const lenghtNumber = Math.ceil(props.pageContent.length / 4);
   const pageNumber = Array.from(Array(lenghtNumber).keys());

   function changePageHandler(event: React.MouseEvent<HTMLSpanElement>) {
      const selectedPage = +event.currentTarget.getAttribute('possition')!;

      czytelniaCtx.setCurrentPostHandler(selectedPage);
   }

   return (
      <React.Fragment>
         <BoxWithLine>
            <h3 className={classes.header}>Czytelnia</h3>
            <div className={pageClasses.wrapper}>
               {props.pageContent.slice(czytelniaCtx.sliceStart, czytelniaCtx.sliceEnd).map((el) => (
                  <SingleEvent key={el.id} content={el} />
               ))}
            </div>
            <div className={pageClasses['page-number']}>
               {pageNumber.map(function (_, i) {
                  if (Math.floor(czytelniaCtx.sliceStart / lenghtNumber) === i) {
                     return (
                        <span
                           className={pageClasses.active}
                           onClick={changePageHandler}
                           key={i}
                           possition={i}>
                           {i + 1}
                        </span>
                     );
                  } else {
                     return (
                        <span onClick={changePageHandler} key={i} possition={i}>
                           {i + 1}
                        </span>
                     );
                  }
               })}
            </div>
         </BoxWithLine>
      </React.Fragment>
   );
};

export default AllEvents;

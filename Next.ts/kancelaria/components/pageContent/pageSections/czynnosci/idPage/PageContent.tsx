import React from 'react';

import classes from '../../pageSectionsText.module.css';

const PageContentCzynnosci: React.FC<{
   pageText: ({ id: string; title: string; text: string } & {
      id: string;
      title: string;
      text: { mainText: string; assideText: string[] };
   })[];
}> = (props) => {
   const text = props.pageText.map((el) => (
      <div key={el.id}>
         <h1 className={classes.assideHeader}>{el.title}</h1>
         {el.text.assideText ? (
            <React.Fragment>
               <p className={classes.text}>{el.text.mainText}</p>
               <ol className={classes.textOl}>
                  {el.text.assideText.map((el, i) => (
                     <li key={el + `_${i}_`}>{el}</li>
                  ))}
               </ol>
            </React.Fragment>
         ) : (
            <p className={classes.text}>{el.text}</p>
         )}
      </div>
   ));

   return <React.Fragment>{text}</React.Fragment>;
};

export default PageContentCzynnosci;

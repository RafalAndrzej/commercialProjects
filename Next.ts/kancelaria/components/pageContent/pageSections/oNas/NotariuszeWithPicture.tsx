import Image from 'next/image';

import React from 'react';
import { MainPerson } from '../../../../types/oNasTypes';

import classes from '../pageSectionsText.module.css';

const NotariuszePicture: React.FC<{ content: MainPerson }> = (props) => {
   return (
      <React.Fragment>
         <div className={classes['main-content']}>
            <h2 className={classes.header}>{props.content.name}</h2>
            {props.content.text.map((_, i) => (
               <p key={i} className={classes.text}>
                  {props.content.text[i]}
               </p>
            ))}
            <p className={classes.text}>
               <a href="mailto:biuro@notariusze-sokolska.pl">{props.content.email}</a>
            </p>
         </div>
         <div className={classes['img-box']}>
            <Image
               src={`${`${props.content.imgSrc}` + '.jpg'}`}
               alt={`${props.content.name}` + ' Notariusz Sokolska'}
               fill
               sizes="(max-width: 600px) 100vw,
               40vw"
               placeholder="blur"
               blurDataURL={props.content.imgSrcBlur}></Image>
         </div>
      </React.Fragment>
   );
};

export default NotariuszePicture;

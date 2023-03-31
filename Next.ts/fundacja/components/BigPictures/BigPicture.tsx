import Image from 'next/image';
import { useRouter } from 'next/router';

import { useContext } from 'react';
import DeviceContext from '../../context/deviceContext';

import { PropsChildren } from '../../types/globalTypes';

import classes from './BigPicture.module.css';

const BigPicture: React.FC<PropsChildren & { pictureOrder: 'first' | 'second'; alt: string }> = (props) => {
   const deviceCtx = useContext(DeviceContext);
   const router = useRouter();

   let possition;
   switch (props.pictureOrder) {
      case 'first':
         possition = -1;
         break;
      case 'second':
         possition = 1;
         break;
   }

   return (
      <section className={classes['main-section']}>
         {props.children}
         {!deviceCtx.deviceTypeIsPhone && (
            <div className={classes.image} style={{ order: possition }}>
               <Image
                  src={`/images/pages/${
                     router.asPath.slice(1) === '' ? 'indexPage' : router.asPath.slice(1)
                  }.jpg`}
                  alt={props.alt}
                  fill
                  sizes="50vw"
               />
            </div>
         )}
      </section>
   );
};

export default BigPicture;

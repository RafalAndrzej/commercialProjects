import Image from 'next/image';

import BigPicture from '../../components/BigPictures/BigPicture';

import classes from './index.module.css';

export default function Home() {
   return (
      <>
         <BigPicture pictureOrder={'second'} alt="">
            <div className={classes.box}>
               <div className={classes.image}>
                  <Image src={'/images/fundacja_logo.jpg'} fill alt="" sizes="50vw"></Image>
               </div>
               <h4>
                  “Najtrudniejsze jest zdecydowanie się na działanie. Reszta to już tylko kwestia wytrwałości”
                  – Amelia Earhart
               </h4>
            </div>
         </BigPicture>
      </>
   );
}

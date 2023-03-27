import Image from 'next/image';

import { useState, useContext } from 'react';
import HelperContext from '../../../context/helperContext';

import ColorChanger from './ColorChanger';
import LetterSize from './LetterSize';

import classes from './RestNavigation.module.css';

const RestNavigation: React.FC = () => {
   const helperCtx = useContext(HelperContext);

   const [fontSize, setFontSize] = useState(16);
   if (fontSize >= 8 || fontSize <= 20) {
   }

   function smallerHandler() {
      if (helperCtx.fontSize > 10) {
         helperCtx.setFontSize((cur) => cur - 2);
      }
   }
   function biggerHandler() {
      if (helperCtx.fontSize < 20) {
         helperCtx.setFontSize((cur) => cur + 2);
      }
   }

   return (
      <>
         <Image
            src={'/images/navigation/logo-opp.jpg'}
            width={helperCtx.fontSize * 2.5}
            height={helperCtx.fontSize * 2.5}
            alt="logo organizacji pożytku publicznego"
         />
         <div className={classes['change-font-size']}>
            <p>Czcionka: </p>
            <LetterSize changeLetterSize={smallerHandler} />
            <LetterSize changeLetterSize={biggerHandler} />
         </div>
         <div className={classes['change-color-sheme']}>
            <p>Kontrast:</p>
            <ColorChanger changeColor={false} />
            <ColorChanger changeColor={true} />
         </div>
      </>
   );
};

export default RestNavigation;

import Link from 'next/link';

import React from 'react';

import classes from '../pageSectionsText.module.css';
import pageClasses from './index.module.css';

const CzynnosciSection: React.FC = () => {
   return (
      <div>
         <h3 className={classes.header}>Czynności</h3>
         <p className={classes.text}>
            Notariusz jest powołany do dokonywania czynności, którym strony są obowiązane lub pragną nadać
            formę notarialną, a czynności notarialne dokonane przez notariusza mają charakter dokumentu
            urzędowego.
         </p>
         <ul className={pageClasses.menuList}>
            <li>
               <Link href="/czynnosci/nieruchomosci">Nieruchomości</Link>
            </li>
            <li>
               <Link href="/czynnosci/dziedziczenie">Dziedziczenie</Link>
            </li>
            <li>
               <Link href="/czynnosci/prawo-rodzinne">Prawo rodzinne</Link>
            </li>
            <li>
               <Link href="/czynnosci/spolki">Spółki i inne osoby prawne</Link>
            </li>
            <li>
               <Link href="/czynnosci/inne">Inne</Link>
            </li>
         </ul>
      </div>
   );
};

export default CzynnosciSection;

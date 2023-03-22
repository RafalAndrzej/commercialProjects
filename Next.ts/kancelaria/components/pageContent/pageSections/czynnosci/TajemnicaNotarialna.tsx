import React from 'react';

import classes from '../pageSectionsText.module.css';

const TajemnicaNotarialna: React.FC = () => {
   return (
      <React.Fragment>
         <h4 className={classes.assideHeader}>Tajemnica notarialna</h4>
         <p className={classes.text}>
            Notariusz jest obowiązany zachować w tajemnicy okoliczności sprawy, o których powziął wiadomość ze
            względu na wykonywane czynności notarialne. Obowiązek zachowania tajemnicy ustaje, gdy notariusz
            składa zeznania jako świadek przed sądem. W tych wypadkach od obowiązku zachowania tajemnicy może
            zwolnić notariusza Minister Sprawiedliwości lub Sąd.
         </p>
         <p className={classes.text}>
            Notariusz w zakresie swoich uprawnień działa jako osoba zaufania publicznego, korzystając z
            ochrony przysługującej funkcjonariuszom publicznym.
         </p>
         <p className={classes.text}>
            Czynności notarialne dokonuje się w języku polskim. Na żądanie strony notariusz może dokonać
            dodatkowo tej czynności w języku obcym, korzystając z pomocy tłumacza przysięgłego.
         </p>
      </React.Fragment>
   );
};

export default TajemnicaNotarialna;

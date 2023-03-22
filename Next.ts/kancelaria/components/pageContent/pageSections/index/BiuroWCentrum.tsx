import React from 'react';

import classes from '../pageSectionsText.module.css';

const BiuroWCentrumText: React.FC = () => {
   return (
      <React.Fragment>
         <h2 className={classes.header}>Biuro w centrum Katowic</h2>
         <p className={classes.text}>
            Nasza Kancelaria Notarialna ma swoją siedzibę w centrum Katowic – na I piętrze nowoczesnego
            budynku „Sokolska Towers” przy ulicy Sokolskiej 30.Budynek, w którym znajduje się nasza Kancelaria
            Notarialna dostosowany jest dla potrzeb niepełnosprawnych i osób starszych oraz wyposażony jest w
            windy.
         </p>
      </React.Fragment>
   );
};

export default BiuroWCentrumText;

import React from 'react';

import classes from '../pageSectionsText.module.css';

const KancelariaText: React.FC = () => {
   return (
      <React.Fragment>
         <h2 className={classes.header}>Kancelaria</h2>
         <p className={classes.text}>
            Kancelaria Notarialna Alicja Świergot, Karolina Pawełczyk powstała z myślą o mieszkańcach Katowic,
            Śląska i nie tylko, którzy chcą skorzystać z usług notarialnych.
         </p>
         <p className={classes.text}>
            Nasza kancelaria notarialna w Katowicach jest tworzona przez doświadczony i profesjonalny zespół.
            Notariusz Alicja Świergot i notariusz Karolina Pawełczyk zostały powołane na stanowisko przez
            Ministra Sprawiedliwości i zapewniają najwyższą jakość świadczonych czynności, w oparciu o ustawę
            Prawo o notariacie oraz innych przepisów prawa.
         </p>
         <p className={classes.text}>
            Notariusze Alicja Świergot i Karolina Pawełczyk dokonują takich usług jak: sporządzenie aktu
            notarialnego, poświadczenia dziedziczenia, spisanie protokołów, poświadczenia podpisów, odpisów i
            wyciągów z dokumentów oraz innych.
         </p>
      </React.Fragment>
   );
};

export default KancelariaText;

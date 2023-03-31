import KontoFundacji from '../../../components/daneFundacji/KontoFundacji';
import HeaderWithSmallPicture from '../../../components/headerWithSmallPicture/HeaderWithSmallPicture';

import classes from './index.module.css';

const ChcePomoc: React.FC = () => {
   return (
      <>
         <section className={classes.pomoc}>
            <HeaderWithSmallPicture
               header="Chcę pomóc"
               src="/images/smallHeader/headerPicture.jpg"
               alt="children on wheelchair play"
            />
            <h1>Darowizny na rzecz Fundacji</h1>
            <p className={classes.text}>
               Osoby fizyczne, a także spółki osobowe, mogą odliczyć od kwoty do opodatkowania 6% dochodu
               (PIT), a osoby prawne 10% dochodu (CIT).
            </p>
            <p className={classes.text}>Nie pobieramy prowizji od wpłat darczyńców.</p>
            <p className={classes.text}>
               Jeśli potrzebujesz umowy darowizny lub potwierdzenia wpłaty prosimy o kontakt na adres:
               info@fundacjafamily.com Wystarczy dokonać wpłaty na konto bankowe Fundacji:
            </p>
         </section>
         <KontoFundacji />
      </>
   );
};

export default ChcePomoc;

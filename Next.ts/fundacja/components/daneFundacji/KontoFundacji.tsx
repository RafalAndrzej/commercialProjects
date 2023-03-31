import Image from 'next/image';
import classes from './KontoFundacji.module.css';

const KontoFundacji: React.FC = () => {
   return (
      <>
         <section className={classes.konto}>
            <div className={classes.box}>
               <h4>BNP PARIBAS</h4>
               <h4>90 1750 0012 0000 0000 4088 9318</h4>
               <p>
                  <span>(</span>tytuł przelewu: darowizny na cele statutowe<span>)</span>
               </p>
            </div>
            <div className={classes.box}>
               <h3>
                  Przekaż
                  <span>
                     <Image
                        src="/images/1-5_procent.png"
                        width={60}
                        height={30}
                        alt="logo półtora procenta podatku"></Image>
                  </span>
                  podatku
               </h3>
               <p>Zapamiętaj ten numer!</p>
               <h1>KRS 0000532934</h1>
            </div>
         </section>
         <section className={classes.opis}>
            <h3>Szanowni Państwo</h3>
            <p>
               Fundacja &quot;FAMILY&quot; posiada status organizacji pożytku publicznego. Figuruje w wykazie
               organizacji pożytku publicznego uprawnionych do otrzymania 1,5% podatku dochodowego od osób
               fizycznych za rok 2022 na stronie internetowej&nbsp;
               <a className="link" href="https://niw.gov.pl/opp/wykaz-opp/" target={'_blank'}>
                  Narodowego Instytutu Wolności. (https://niw.gov.pl/opp/wykaz-opp/)
               </a>
            </p>
         </section>
      </>
   );
};

export default KontoFundacji;

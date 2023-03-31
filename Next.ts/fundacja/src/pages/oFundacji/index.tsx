import BigPicture from '../../../components/BigPictures/BigPicture';
import DaneFundacji from '../../../components/daneFundacji/daneFundacji';

import classes from './index.module.css';

const OFundacji: React.FC = () => {
   return (
      <>
         <BigPicture pictureOrder={'first'} alt="">
            <div className={classes.wrapper}>
               <h2>O Fundacji</h2>
               <h3>Misja</h3>
               <div className={classes.box}>
                  <div>
                     <p>
                        Przewodnią ideą Fundacji jest obniżenie kosztów rehabilitacji dziecięcej oraz pomoc w
                        dostępie i organizacji zajęć dla rodziców dzieci niepełnosprawnych oraz zagrożonych
                        niepełnosprawnością.
                     </p>
                     <p>
                        Są to dzieci z Mózgowym Porażeniem Dziecięcym, zespołem Downa, zaburzeniami napięcia
                        mięśniowego i innymi schorzeniami.
                     </p>
                  </div>
                  <div>
                     <p>
                        Przekazujemy fundusze na ich rehabilitację z zakresu fizjoterapii, logopedii,
                        psychologii i pedagogiki. Dzięki Darczyńcą nasi podopieczni mają szansę na poprawę
                        zdrowia i sprawności.
                     </p>
                     <p>
                        <strong>nie pobieramy prowizji od wpłat darczyńców</strong>
                     </p>
                  </div>
               </div>
            </div>
         </BigPicture>
         <section className={classes.dane}>
            <DaneFundacji />
         </section>
         <section className={classes.krs}>
            <h3>KRS</h3>
            <p>Aktualny KRS do pobrania ze strony Ministerstwa Sprawiedliwości</p>
            <a className="link" href="https://ems.ms.gov.pl/krs/wyszukiwaniepodmiotu" target={'_blank'}>
               https://ems.ms.gov.pl/krs/wyszukiwaniepodmiotu
            </a>
            <section>
               <ul className={classes.list}>
                  <p>Sprawozdania:</p>
                  <li>
                     <p>rok 2022</p>
                     <a className="link" href="./">
                        Link
                     </a>
                  </li>
                  <li>
                     <span>rok 2021</span>
                     <a className="link" href="./">
                        Link
                     </a>
                  </li>
                  <li>
                     <span>rok 2020</span>
                     <a className="link" href="./">
                        Link
                     </a>
                  </li>
               </ul>
            </section>
         </section>
      </>
   );
};

export default OFundacji;

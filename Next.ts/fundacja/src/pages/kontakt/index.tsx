import HeaderWithPicture from '../../../components/headerWithPicture/HeaderWithPicture';
import DaneFundacji from '../../../components/daneFundacji/daneFundacji';

import classes from './index.module.css';

const Kontakt: React.FC = () => {
   return (
      <section className={classes.kontakt}>
         <HeaderWithPicture text="Kontakt">
            <DaneFundacji />
         </HeaderWithPicture>
         <p className={classes['asside-text']}>Nie posiadamy stacjonarnego biura obsługi.</p>
         <div className={classes.text}>
            <p>Wszelką korespondencję listowną prosimy kierować na adres:</p>
            <p>
               Fundacja FAMILY<br></br>ul. Polna 3A<br></br>66-133 Klenica
            </p>
         </div>
         <div className={classes.text}>
            Zachęcamy do kontaktu poprzez wiadomości e-mail:&nbsp;
            <a className="link" href="mailto:info@fundacjafamily.com" rel="noreferrer">
               info@fundacjafamily.com
            </a>
         </div>
      </section>
   );
};

export default Kontakt;

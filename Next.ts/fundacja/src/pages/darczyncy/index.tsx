import HeaderWithSmallPicture from '../../../components/headerWithSmallPicture/HeaderWithSmallPicture';

import classes from './index.module.css';

const Darczyncy: React.FC = () => {
   return (
      <>
         <section>
            <HeaderWithSmallPicture
               src="/images/smallHeader/headerPicture.jpg"
               alt="Zostań naszym Darczyńca"
               header="Zostań Darczyńcą"></HeaderWithSmallPicture>
            <div className={classes.text}>
               <p>Jeżeli chcesz pomagać innym, napisz do nas!</p>
               <p>Zachęcamy do kontaktu poprzez wiadomości e-mail:</p>
               <a className="link" href="mailto:info@fundacjafamily.com" rel="noreferrer">
                  info@fundacjafamily.com
               </a>
            </div>
         </section>
      </>
   );
};
export default Darczyncy;

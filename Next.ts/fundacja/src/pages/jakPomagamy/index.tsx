import Image from 'next/image';

import HeaderWithPicture from '../../../components/headerWithPicture/HeaderWithPicture';

import classes from './index.module.css';

const JakPomagamy: React.FC = () => {
   return (
      <section>
         <HeaderWithPicture text="Jak Pomagamy">
            <div className={classes.text}>
               <ul>
                  <h2>W ramach naszych działań:</h2>
                  <li>
                     <p>pozyskujemy fundusze na rehabilitację dzieci</p>
                  </li>
                  <li>
                     <p>
                        refundujemy lub dofinansowujemy koszty takich zajęć jak np. fizjoterapia, zajęcia u
                        logopedy, zajęcia u pedagoga, zajęcia u psychologa, terapia ręki itp.
                     </p>
                  </li>
               </ul>
            </div>
         </HeaderWithPicture>
         <section className={classes.wrapper}>
            <div className={classes.img}>
               <Image
                  src={'/images/pages/jakPomagamy.jpg'}
                  fill
                  sizes="(max-width: 700px) 40vw, 80vw"
                  alt=""></Image>
            </div>
            <div className={classes.text}>
               <h2>Współpraca</h2>
               <p>Firmy odpowiedzialne społecznie zaangażowane w stałą współpracę z Fundacją.</p>
            </div>
         </section>
      </section>
   );
};

export default JakPomagamy;

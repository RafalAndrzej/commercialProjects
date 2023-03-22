import Image from 'next/image';
import Link from 'next/link';
import DaneKontaktowe from './DaneKontaktowe';

import classes from './index.module.css';

const Footer: React.FC<{ closeSubMenu?: () => void }> = (props) => {
   return (
      <footer onClick={props.closeSubMenu} className={classes.footer}>
         <div className={classes.wrapper}>
            <Image src="/img/smallLogo/5Tnf9dVT9W780nnS.png" alt="Small Logo" width={60} height={70} />
            <div className={classes.box}>
               <DaneKontaktowe />
               <div className={classes.links}>
                  <Link href="./">Home</Link>
                  <Link href="/oNas">O nas</Link>
                  <Link href="/czynnosci">Czynności</Link>
               </div>
               <div className={classes.links}>
                  <Link href="/oplaty">Opłaty</Link>
                  <Link href="/czytelnia">Czytelnia</Link>
                  <Link href="/kontakt">Kontakt</Link>
               </div>
               <div className={classes.links}>
                  <Link href="/rodo">RODO</Link>
                  <a href={'https://www.instagram.com/szpilkiwnotariacie/'} target="_blank" rel="noreferrer">
                     Instagram
                  </a>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;

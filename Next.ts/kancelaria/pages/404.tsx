import Link from 'next/link';
import classes from './404.module.css';

const Error: React.FC = () => {
   return (
      <div className={classes.error}>
         <Link className={classes.text} href="/">
            <p>Coś poszło nie tak…</p>
            <p>Powrót na stronę główną</p>
         </Link>
      </div>
   );
};

export default Error;

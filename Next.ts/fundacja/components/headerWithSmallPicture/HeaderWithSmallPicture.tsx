import Image from 'next/image';
import classes from './HeaderWithSmallPicture.module.css';

const HeaderWithSmallPicture: React.FC<{ header: string; src: string; alt: string }> = (props) => {
   return (
      <div className={classes['box-header']}>
         <h1>
            <span>{props.header}</span>
         </h1>
         <div className={classes.img}>
            <Image
               src={props.src}
               alt={props.alt}
               fill
               sizes="(min-width: 700px) 30vw,
                (max-width: 700px) 50vw"
            />
         </div>
      </div>
   );
};

export default HeaderWithSmallPicture;

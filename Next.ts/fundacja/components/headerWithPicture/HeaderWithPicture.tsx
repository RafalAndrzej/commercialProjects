import Image from 'next/image';
import { PropsChildren } from '../../types/globalTypes';

import classes from './HeaderWithPicture.module.css';

const HeaderWithPicture: React.FC<PropsChildren & { text: string }> = ({ text, children }) => {
   return (
      <div className={classes['box-header']}>
         <div className={classes['header-text']}>
            <h1>
               <span>{text}</span>
            </h1>
            {children}
         </div>
         <div className={classes.img}>
            <Image
               src="/images/header/together.jpg"
               alt=""
               fill
               sizes="(min-width: 700px) 40vw,
          (max-width: 700px) 100vw"
            />
         </div>
      </div>
   );
};

export default HeaderWithPicture;

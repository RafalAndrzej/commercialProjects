import Image from 'next/image';

import classes from './Img.module.css';

const ImgBoxWithNav: React.FC<{ src: string; blurImg?: string; alt: string; height: string }> = (props) => {
   if (props.blurImg) {
      return (
         <div style={{ height: props.height }} className={classes['img-box']}>
            <Image
               src={props.src}
               fill
               sizes="100vw"
               alt={props.alt}
               blurDataURL={props.blurImg}
               placeholder="blur"
            />
         </div>
      );
   } else {
      return (
         <div style={{ height: props.height }} className={classes['img-box']}>
            <Image src={props.src} fill sizes="100vw" alt={props.alt} />
         </div>
      );
   }
};

export default ImgBoxWithNav;

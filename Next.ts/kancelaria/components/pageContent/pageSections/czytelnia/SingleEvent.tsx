import Link from 'next/link';
import Image from 'next/image';

import classes from './SingleEvent.module.css';

import { BlurDataStructureCzytelnia } from '../../../../types/czytelniaTypes';

const SingleEvent: React.FC<{ content: BlurDataStructureCzytelnia }> = (props) => {
   return (
      <Link className={classes.event} href={`/czytelnia/${props.content.pageHref}`}>
         <div className={classes.box}>
            <Image
               src={props.content.imgSrc}
               fill
               alt={props.content.title}
               sizes="(min-width: 700px) 50vw, 100vw"
               placeholder="blur"
               blurDataURL={props.content.blurImg}></Image>
         </div>
         <h3>{props.content.title}</h3>
      </Link>
   );
};

export default SingleEvent;

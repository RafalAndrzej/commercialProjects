import { RestPerson } from '../../../../types/oNasTypes';

import classes from '../pageSectionsText.module.css';

const NotariuszePicture: React.FC<{ content: RestPerson }> = (props) => {
   return (
      <div>
         <h3 className={classes.header}>{props.content.name}</h3>
         {props.content.text.map((_, i) => (
            <p key={i} className={classes.text}>
               {props.content.text[i]}
            </p>
         ))}
      </div>
   );
};

export default NotariuszePicture;

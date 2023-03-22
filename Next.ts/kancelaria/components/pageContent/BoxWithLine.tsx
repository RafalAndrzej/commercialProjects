import React from 'react';

import classes from './BoxWithLine.module.css';

const BoxWithLine: React.FC<{ children: React.ReactNode; className?: string }> = (props) => {
   return (
      <section className={props.className ? `${classes.section} ${props.className}` : classes.section}>
         <React.Fragment>{props.children}</React.Fragment>
      </section>
   );
};

export default BoxWithLine;

import { GetStaticProps, InferGetStaticPropsType } from 'next';

import BoxWithLine from '../../components/pageContent/BoxWithLine';

import { rodoGetAll } from '../../helpers/api-util';
import { Rodo } from '../../types/rodoType';

import classes from './index.module.css';

const Rodo = ({ pageContent }: InferGetStaticPropsType<typeof getStaticProps>) => {
   return (
      <BoxWithLine className={classes.rodo}>
         <h1>{pageContent.heading}</h1>
         <p>{pageContent.mainText}</p>
         <ol>
            {pageContent.liText.map((el, i) => (
               <li key={i}>{el}</li>
            ))}
         </ol>
      </BoxWithLine>
   );
};

export const getStaticProps: GetStaticProps<{ pageContent: Rodo }> = async () => {
   const pageContent = await rodoGetAll();

   return {
      props: { pageContent },
   };
};

export default Rodo;

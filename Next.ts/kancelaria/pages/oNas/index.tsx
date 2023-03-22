import { GetStaticProps, InferGetStaticPropsType } from 'next';

import React from 'react';

import { getPlaiceholder } from 'plaiceholder';

import { oNasGetAll } from '../../helpers/api-util';

import BoxWithLine from '../../components/pageContent/BoxWithLine';

import NotariuszePicture from '../../components/pageContent/pageSections/oNas/NotariuszeWithPicture';
import Notariusze from '../../components/pageContent/pageSections/oNas/Notariusze';
import DoKontaktu from '../../components/zapraszamyDoKontaktu/DoKontaktu';

import { DataStructureONas } from '../../types/globalTypes';

import classes from './index.module.css';

const ONas = ({ pageContent }: InferGetStaticPropsType<typeof getStaticProps>) => {
   return (
      <React.Fragment>
         {pageContent.mainPersons.map((el) => (
            <BoxWithLine className={classes.wrapper} key={el.name}>
               <NotariuszePicture content={el} />
            </BoxWithLine>
         ))}
         {pageContent.restPersons.map((el) => (
            <BoxWithLine className={classes.wrapper} key={el.name}>
               <Notariusze content={el} />
            </BoxWithLine>
         ))}

         <DoKontaktu />
      </React.Fragment>
   );
};

export const getStaticProps: GetStaticProps<{ pageContent: DataStructureONas }> = async () => {
   const pageContent = await oNasGetAll();

   const { base64: Alicja } = await getPlaiceholder(pageContent.mainPersons[0].imgSrc + '.jpg', { size: 50 });
   const { base64: Karolina } = await getPlaiceholder(pageContent.mainPersons[1].imgSrc + '.jpg', {
      size: 50,
   });

   const base64 = [Alicja, Karolina];

   return {
      props: {
         pageContent: {
            mainPersons: Object.values(
               pageContent.mainPersons.map((el, i) => {
                  return {
                     ...el,
                     imgSrcBlur: base64[i],
                  };
               })
            ),
            restPersons: pageContent.restPersons,
         },
      },
   };
};

export default ONas;

import { GetStaticProps, InferGetStaticPropsType } from 'next';

import React from 'react';

import AllEvents from '../../components/pageContent/pageSections/czytelnia/AllEvents';

import { czytelniaGetAll } from '../../helpers/api-util';
import { BlurDataStructureCzytelnia } from '../../types/czytelniaTypes';

import { base64 } from '../../helpers/api-util';

const Czytelnia = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
   return <AllEvents pageContent={props.contentWithBlur} />;
};

export const getStaticProps: GetStaticProps<{ contentWithBlur: BlurDataStructureCzytelnia[] }> = async () => {
   const pageContent = await czytelniaGetAll();

   const contentWithBlur = [];
   for (const element of pageContent) {
      contentWithBlur.push({
         ...element,
         blurImg: await base64(element.imgSrc),
      });
   }

   return {
      props: { contentWithBlur },
   };
};

export default Czytelnia;

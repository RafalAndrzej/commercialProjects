import { GetStaticProps, InferGetStaticPropsType } from 'next';

import React from 'react';

import { czynnosciGetAll } from '../../../helpers/api-util';

import { IParams } from '../../../types/globalTypes';
import { CzynnosciExtendContent, CzynnosciBasicContent } from '../../../types/czynnosciTypes';

import DoKontaktu from '../../../components/zapraszamyDoKontaktu/DoKontaktu';
import BoxWithLine from '../../../components/pageContent/BoxWithLine';

import classes from './index.module.css';
import PageContentCzynnosci from '../../../components/pageContent/pageSections/czynnosci/idPage/PageContent';

const CzynnosciDetailPage = ({ renderPageContent }: InferGetStaticPropsType<typeof getStaticProps>) => {
   return (
      <React.Fragment>
         <h1 className={classes.header}>{renderPageContent.title.toUpperCase()}</h1>
         <BoxWithLine>
            <PageContentCzynnosci pageText={renderPageContent.subList as any[]} />
         </BoxWithLine>
         <DoKontaktu />
      </React.Fragment>
   );
};

export const getStaticProps: GetStaticProps<{
   renderPageContent: CzynnosciBasicContent & CzynnosciExtendContent;
}> = async (context) => {
   const { id } = context.params as IParams;

   const czynnosciAllData = await czynnosciGetAll();
   const pageContent = czynnosciAllData.find((el) => Object.keys(el)[0] === id) as {};

   const renderPageContent = Object.values(pageContent)[0] as CzynnosciBasicContent & CzynnosciExtendContent;

   return {
      props: { renderPageContent },
   };
};

export async function getStaticPaths() {
   const czynnosciAllData = await czynnosciGetAll();

   const allPaths: { params: { id: string } }[] = [];

   czynnosciAllData.map((el) => {
      allPaths.push({ params: { id: Object.keys(el)[0] } });
   });

   return {
      paths: allPaths,
      fallback: false,
   };
}

export default CzynnosciDetailPage;

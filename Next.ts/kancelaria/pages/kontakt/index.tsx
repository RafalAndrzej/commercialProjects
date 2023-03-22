import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { useRouter } from 'next/router';

import React, { useContext } from 'react';

import DeviceContex from '../../context/deviceType.Context';
import { kontaktGetAll } from '../../helpers/api-util';

import DaneKontaktowe from '../../components/footer/DaneKontaktowe';
import Form from '../../components/form';
import HeaderImg from '../../components/headerImg/HeaderImg';
import ImgBox100vw from '../../components/layout/ImgBox100vw';
import BoxWithLine from '../../components/pageContent/BoxWithLine';

import { Kontakt } from '../../types/kontaktTypes';

import classes from '../../components/pageContent/pageSections/pageSectionsText.module.css';
import pageClasses from './index.module.css';

const Kontakt = ({ pageContent }: InferGetStaticPropsType<typeof getStaticProps>) => {
   const deviceCtx = useContext(DeviceContex);
   const router = useRouter();

   return (
      <React.Fragment>
         {deviceCtx.deviceTypeIsPhone ? (
            <HeaderImg currentPage={router.pathname.slice(1)} height="55vh" />
         ) : (
            <section className={classes.desktop}>
               <div>
                  <h1 className="header">Notariusze Sokolska</h1>
                  <DaneKontaktowe />
               </div>
               <HeaderImg currentPage={router.pathname.slice(1)} height="75vh" />
            </section>
         )}
         <BoxWithLine>
            <h2 className={classes.header}>Skontaktuj się z nami</h2>
            <Form />
         </BoxWithLine>
         <ImgBox100vw src="/img/pagesPictures/slider.jpg" alt="slider" height="calc(100vw / 3)"></ImgBox100vw>
         <BoxWithLine>
            {pageContent.map((el, i) => (
               <div key={i}>
                  <h3 className={`${classes.assiedeHeader} ${pageClasses.header}`}>{el.heading}</h3>
                  {el.text.map((text, i) => (
                     <p className={pageClasses.text} key={i}>
                        {text}
                     </p>
                  ))}
               </div>
            ))}
         </BoxWithLine>
      </React.Fragment>
   );
};

export const getStaticProps: GetStaticProps<{ pageContent: Kontakt[] }> = async () => {
   const pageContent = await kontaktGetAll();

   return {
      props: { pageContent },
   };
};

export default Kontakt;

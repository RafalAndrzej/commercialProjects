import { useRouter } from 'next/router';
import Head from 'next/head';

import React, { useContext } from 'react';
import DeviceContex from '../context/deviceType.Context';

import HeaderImg from '../components/headerImg/HeaderImg';
import BoxWithLine from '../components/pageContent/BoxWithLine';
import Kancelaria from '../components/pageContent/pageSections/index/Kancelaria';
import BiuroWCentrum from '../components/pageContent/pageSections/index/BiuroWCentrum';
import DoKontaktu from '../components/zapraszamyDoKontaktu/DoKontaktu';
import ImgBox100vw from '../components/layout/ImgBox100vw';

import classes from '../components/pageContent/pageSections/pageSectionsText.module.css';

const IndexPage: React.FC = () => {
   const deviceCtx = useContext(DeviceContex);
   const router = useRouter();

   return (
      <React.Fragment>
         <Head>
            <title>Strona tytułowa</title>
         </Head>
         <>
            {deviceCtx.deviceTypeIsPhone ? (
               <HeaderImg currentPage={router.pathname.slice(1)} height="50vh" />
            ) : (
               <section className={classes.desktop}>
                  <div className={classes.index}>
                     <h1 className="header">Notariusze Sokolska</h1>
                     <div className={classes.instagram}>
                        <a
                           href={'https://www.instagram.com/szpilkiwnotariacie/'}
                           target="_blank"
                           rel="noreferrer">
                           Instagram
                        </a>
                     </div>
                  </div>
                  <HeaderImg currentPage={router.pathname.slice(1)} height="75vh" />
               </section>
            )}
         </>
         <BoxWithLine>
            <Kancelaria />
         </BoxWithLine>
         <ImgBox100vw src="/img/pagesPictures/slider.jpg" alt="SLider image" height="calc(100vw / 3.2)" />
         <BoxWithLine>
            <BiuroWCentrum />
         </BoxWithLine>
         <DoKontaktu />
      </React.Fragment>
   );
};

export default IndexPage;

import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { getPlaiceholder } from 'plaiceholder';
import React, { useContext } from 'react';

import DeviceContex from '../../context/deviceType.Context';
import { oplatyGetAll } from '../../helpers/api-util';

import { DataStructureOplaty } from '../../types/oplatyTypes';

import BoxWithLine from '../../components/pageContent/BoxWithLine';
import PageContentOplaty from '../../components/pageContent/pageSections/oplaty/pageContent';
import ImgBoxWithNav from '../../components/layout/ImgBoxwithNav';
import ImgBox100vw from '../../components/layout/ImgBox100vw';

import classes from '../../components/pageContent/pageSections/pageSectionsText.module.css';

const Oplaty = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
   const deviceCtx = useContext(DeviceContex);

   return (
      <React.Fragment>
         {deviceCtx.deviceTypeIsPhone ? (
            // mobileDevice
            <BoxWithLine>
               <h2 className={classes.header}>Opłaty</h2>
               <PageContentOplaty pageText={props.pageContent.slice(0, 2)} />
            </BoxWithLine>
         ) : (
            // DesktopDevice
            <BoxWithLine className={classes.desktop}>
               <div>
                  <h2 className={classes.header}>Opłaty</h2>
                  <PageContentOplaty pageText={props.pageContent.slice(0, 2)} />
               </div>
               <ImgBoxWithNav
                  src="/img/pagesPictures/oplaty/oplaty-top.jpg"
                  blurImg={props.blurImg}
                  alt="Wejście do Kancelarii"
                  height="75vh"></ImgBoxWithNav>
            </BoxWithLine>
         )}
         {deviceCtx.deviceTypeIsPhone && (
            <ImgBox100vw
               src="/img/pagesPictures/oplaty/oplaty-top.jpg"
               blurImg={props.blurImg}
               alt="Wejście do Kancelarii"
               height="75vh"></ImgBox100vw>
         )}
         <BoxWithLine>
            <PageContentOplaty pageText={props.pageContent.slice(2)} />
         </BoxWithLine>
         <ImgBox100vw
            src="/img/pagesPictures/oplaty/oplaty-bottom.jpg"
            alt="Widok Kancelarii"
            height="calc(100vw / 3)"></ImgBox100vw>
      </React.Fragment>
   );
};

export const getStaticProps: GetStaticProps<{
   pageContent: DataStructureOplaty[];
   blurImg: string;
}> = async () => {
   const pageContent = await oplatyGetAll();
   const blurImg = await getPlaiceholder('/img/pagesPictures/oplaty/oplaty-top.jpg', { size: 30 });

   return {
      props: {
         pageContent,
         blurImg: blurImg.base64,
      },
   };
};

export default Oplaty;

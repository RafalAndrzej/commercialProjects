import { GetStaticProps, InferGetStaticPropsType } from 'next';
import React, { useContext } from 'react';

import DeviceContex from '../../context/deviceType.Context';

import { getPlaiceholder } from 'plaiceholder';

import { IGetPlaiceholderReturn } from 'plaiceholder';

import CzynnosciSection from '../../components/pageContent/pageSections/czynnosci/CzynnosciSection';
import BoxWithLine from '../../components/pageContent/BoxWithLine';

import ImgBoxWithNav from '../../components/layout/ImgBoxwithNav';
import ImgBox100vw from '../../components/layout/ImgBox100vw';
import TajemnicaNotarialna from '../../components/pageContent/pageSections/czynnosci/TajemnicaNotarialna';
import DoKontaktu from '../../components/zapraszamyDoKontaktu/DoKontaktu';
import LinkiPage from '../../components/pageContent/pageSections/czynnosci/LinkiPage';

import classes from '../../components/pageContent/pageSections/pageSectionsText.module.css';

const Czynnosci = ({ blurImg }: InferGetStaticPropsType<typeof getStaticProps>) => {
   const deviceCtx = useContext(DeviceContex);
   return (
      <React.Fragment>
         {deviceCtx.deviceTypeIsPhone ? (
            <BoxWithLine>
               <CzynnosciSection />
            </BoxWithLine>
         ) : (
            <BoxWithLine className={classes.desktop}>
               <CzynnosciSection />
               <ImgBoxWithNav
                  src="/img/pagesPictures/czynnosci.jpg"
                  blurImg={blurImg.base64}
                  alt="SLider image"
                  height="75vh"></ImgBoxWithNav>
            </BoxWithLine>
         )}
         {deviceCtx.deviceTypeIsPhone && (
            <ImgBox100vw
               src="/img/pagesPictures/czynnosci.jpg"
               alt="SLider image"
               height="75vh"
               blurImg={blurImg.base64}
            />
         )}
         <BoxWithLine>
            <TajemnicaNotarialna />
         </BoxWithLine>
         <DoKontaktu />
         <BoxWithLine>
            <LinkiPage />
         </BoxWithLine>
      </React.Fragment>
   );
};

export const getStaticProps: GetStaticProps<{ blurImg: IGetPlaiceholderReturn }> = async () => {
   const blurImg = await getPlaiceholder('/img/pagesPictures/czynnosci.jpg', { size: 30 });
   return {
      props: { blurImg },
   };
};

export default Czynnosci;

import Layout from '../components/layout/Layout';

import '../styles/globals.css';
import '../styles/fonts.css';

import type { AppProps } from 'next/app';
import { DeviceContextProvider } from '../context/deviceType.Context';
import { MenuContextProvider } from '../context/menuContext';
import { CzytelniaContextProvider } from '../context/czytelniaContext';

export default function App({ Component, pageProps }: AppProps) {
   return (
      <DeviceContextProvider>
         <MenuContextProvider>
            <CzytelniaContextProvider>
               <Layout>
                  <Component {...pageProps} />
               </Layout>
            </CzytelniaContextProvider>
         </MenuContextProvider>
      </DeviceContextProvider>
   );
}

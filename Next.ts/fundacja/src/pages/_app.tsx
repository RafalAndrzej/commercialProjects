import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { DeviceContextProvider } from '../../context/deviceContext';
import { HelperContextProvider } from '../../context/helperContext';
import { MobileMenuContextProwider } from '../../context/mobilMenuContext';

import Layout from '../../components/Layout';

export default function App({ Component, pageProps }: AppProps) {
   return (
      <DeviceContextProvider>
         <HelperContextProvider>
            <MobileMenuContextProwider>
               <Layout>
                  <Component {...pageProps} />
               </Layout>
            </MobileMenuContextProwider>
         </HelperContextProvider>
      </DeviceContextProvider>
   );
}

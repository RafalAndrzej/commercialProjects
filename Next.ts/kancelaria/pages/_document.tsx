import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
   return (
      <Html lang="pl">
         <Head>
            <meta charSet="utf-8" />
            <link rel="icon" href="/kancelaria.ico" />
            <link
               rel="preload"
               href="/fonts/TWKLausanne-250.woff2"
               as="font"
               type="font/woff2"
               crossOrigin="anonymous"
            />
            <link
               rel="preload"
               href="/fonts/TWKLausanne-500.woff2"
               as="font"
               type="font/woff2"
               crossOrigin="anonymous"
            />
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}

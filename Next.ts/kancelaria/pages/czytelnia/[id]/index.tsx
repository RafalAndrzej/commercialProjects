import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

import React from 'react';

import { base64 } from '../../../helpers/api-util';

import { czytelniaGetAll } from '../../../helpers/api-util';
import { DataStructureCzytelnia } from '../../../types/czytelniaTypes';

import classes from './index.module.css';

const PostDetailPage = ({ selectedPageContent, blurImg }: InferGetStaticPropsType<typeof getStaticProps>) => {
   const router = useRouter();

   return (
      <section>
         <div className={classes.img}>
            <Image
               src={selectedPageContent.imgSrc}
               fill
               sizes="100vw"
               alt={`Zdjęcie ${selectedPageContent.pageHref}`}
               placeholder="blur"
               blurDataURL={blurImg}></Image>
         </div>
         <div className={classes.text}>
            <h1>{selectedPageContent.title}</h1>
            {selectedPageContent.text.map((text, i) => (
               <p key={`${selectedPageContent.id}` + `${i}`}>{text}</p>
            ))}
         </div>
         <div onClick={router.back} className={classes.goBack}>
            Powrót do poprzedniej strony
         </div>
      </section>
   );
};

export const getStaticProps: GetStaticProps<{
   selectedPageContent: DataStructureCzytelnia;
   blurImg: string;
}> = async (context) => {
   const pageContent = await czytelniaGetAll();
   const [selectedPageContent] = pageContent.filter((content) => content.pageHref === context.params!.id);

   return {
      props: {
         selectedPageContent,
         blurImg: await base64(selectedPageContent.imgSrc),
      },
   };
};

export const getStaticPaths = async () => {
   const paths = await czytelniaGetAll();

   return {
      paths: paths.map((el) => ({
         params: { id: el.pageHref },
      })),
      fallback: false,
   };
};

export default PostDetailPage;

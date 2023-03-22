export interface DataStructureCzytelnia {
   id: string;
   pageHref: string;
   title: string;
   imgSrc: string;
   text: string[];
}

export interface BlurDataStructureCzytelnia extends DataStructureCzytelnia {
   blurImg: string;
}

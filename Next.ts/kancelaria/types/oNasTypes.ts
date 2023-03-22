export interface RestPerson {
   name: string;
   text: string[];
}

export interface MainPerson extends RestPerson {
   email: string;
   imgSrc: string;
   imgSrcBlur: string;
}

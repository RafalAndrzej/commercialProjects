export interface CzynnosciBasicContent {
   title: string;
   subList: [{ id: string; title: string; text: string }];
}

export interface CzynnosciExtendContent {
   title: string;
   subList: { id: string; title: string; text: { mainText: string; assideText: string[] } }[];
}

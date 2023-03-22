import { ParsedUrlQuery } from 'querystring';

import { RestPerson, MainPerson } from './oNasTypes';
import { CzynnosciBasicContent, CzynnosciExtendContent } from './czynnosciTypes';
import { DataStructureOplaty } from './oplatyTypes';
import { DataStructureCzytelnia } from './czytelniaTypes';
import { Rodo } from './rodoType';
import { Kontakt } from './kontaktTypes';

//React
declare module 'react' {
   interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      possition?: number;
   }
}
//Next

export interface IParams extends ParsedUrlQuery {
   page: string;
}

export interface PropsChildren {
   children: React.ReactNode;
}

// Interface for Czynności Page
interface DataStructureCzynnosci {
   nieruchomosci: CzynnosciBasicContent;
   dziedziczenie: CzynnosciBasicContent;
   'prawo-rodzinne': CzynnosciExtendContent;
   spolki: CzynnosciBasicContent;
   inne: CzynnosciBasicContent;
}

export interface DataStructureONas {
   mainPersons: MainPerson[];
   restPersons: RestPerson[];
}

export interface DataStructure {
   oNas: DataStructureONas;
   czynnosci: DataStructureCzynnosci[];
   oplaty: DataStructureOplaty[];
   czytelnia: DataStructureCzytelnia[];
   rodo: Rodo;
   kontakt: Kontakt[];
}

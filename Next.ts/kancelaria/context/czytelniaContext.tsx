import React, { useState } from 'react';

import { PropsChildren } from '../types/globalTypes';

interface Czytelnia {
   sliceStart: number;
   sliceEnd: number;
   setCurrentPostHandler: (selectedPage: number) => void;
}

const CzytelniaContext = React.createContext<Czytelnia>({
   sliceStart: 0,
   sliceEnd: 4,
   setCurrentPostHandler(selectedPage) {},
});

export const CzytelniaContextProvider: React.FC<PropsChildren> = ({ children }) => {
   const [[sliceStart, sliceEnd], setCurrentPage] = useState<[number, number]>([0, 4]);

   function setCurrentPostHandler(selectedPage: number) {
      setCurrentPage(([curSliceStart, curSliceEnd]) => [
         curSliceStart * 0 + selectedPage * 4,
         curSliceEnd * 0 + 4 + selectedPage * 4,
      ]);
   }

   return (
      <CzytelniaContext.Provider
         value={{
            sliceStart,
            sliceEnd,
            setCurrentPostHandler,
         }}>
         {children}
      </CzytelniaContext.Provider>
   );
};

export default CzytelniaContext;

import React, { useState } from 'react';

import { PropsChildren } from '../types/globalTypes';

const HelperContext = React.createContext<{
   helperColor: boolean;
   setHelperColor: React.Dispatch<React.SetStateAction<boolean>>;

   fontSize: number;
   setFontSize: React.Dispatch<React.SetStateAction<number>>;
}>({
   //color helper
   helperColor: false,
   setHelperColor: () => {},

   // fontSize helper
   fontSize: 16,
   setFontSize: () => {},
});

export const HelperContextProvider: React.FC<PropsChildren> = ({ children }) => {
   const [helperColor, setHelperColor] = useState(false);
   const [fontSize, setFontSize] = useState(16);

   return (
      <HelperContext.Provider value={{ helperColor, setHelperColor, fontSize, setFontSize }}>
         {children}
      </HelperContext.Provider>
   );
};

export default HelperContext;

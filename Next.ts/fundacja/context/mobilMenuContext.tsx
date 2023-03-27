import React, { useState } from 'react';

import { PropsChildren } from '../types/globalTypes';

const MobileMenuContext = React.createContext<{
   mobileMenuIsOpen: boolean;
   setMobileMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
   closeMobilMenuHandler: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
}>({
   mobileMenuIsOpen: false,
   setMobileMenuIsOpen: () => {},
   closeMobilMenuHandler: () => {},
});

export const MobileMenuContextProwider: React.FC<PropsChildren> = ({ children }) => {
   const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

   function closeMobilMenuHandler() {
      setTimeout(() => {
         setMobileMenuIsOpen(false);
      }, 200);
   }

   return (
      <MobileMenuContext.Provider value={{ mobileMenuIsOpen, setMobileMenuIsOpen, closeMobilMenuHandler }}>
         {children}
      </MobileMenuContext.Provider>
   );
};

export default MobileMenuContext;

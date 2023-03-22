import React, { useState } from 'react';

import { PropsChildren } from '../types/globalTypes';

interface menuContext {
   menuVisible: boolean;
   menuVisibleHandler: () => void;

   subMenuVisible: boolean;
   subMenuVisibleHandler: () => void;
}

const MenuContext = React.createContext<menuContext>({
   menuVisible: false,
   menuVisibleHandler: () => {},

   subMenuVisible: false,
   subMenuVisibleHandler: () => {},
});

export const MenuContextProvider: React.FC<PropsChildren> = ({ children }) => {
   const [menuVisible, setMenuVisible] = useState(false);
   const [subMenuVisible, setSubMenuVisible] = useState(false);

   function menuVisibleHandler() {
      setMenuVisible((prev) => !prev);
   }
   function subMenuVisibleHandler() {
      setSubMenuVisible((prev) => !prev);
   }

   return (
      <MenuContext.Provider
         value={{
            menuVisible,
            menuVisibleHandler,

            subMenuVisible,
            subMenuVisibleHandler,
         }}>
         {children}
      </MenuContext.Provider>
   );
};

export default MenuContext;

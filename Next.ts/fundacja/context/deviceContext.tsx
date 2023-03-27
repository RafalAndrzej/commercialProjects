import React, { useState } from 'react';
import { PropsChildren } from '../types/globalTypes';

const DeviceContext = React.createContext<{
   deviceTypeIsPhone: boolean | null;
   setDeviceTypeIsPhone: React.Dispatch<React.SetStateAction<boolean | null>>;
}>({
   deviceTypeIsPhone: false,
   setDeviceTypeIsPhone: () => {},
});

export const DeviceContextProvider: React.FC<PropsChildren> = ({ children }) => {
   const [deviceTypeIsPhone, setDeviceTypeIsPhone] = useState<null | boolean>(null);

   return (
      <DeviceContext.Provider value={{ deviceTypeIsPhone, setDeviceTypeIsPhone }}>
         {children}
      </DeviceContext.Provider>
   );
};

export default DeviceContext;

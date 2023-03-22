import React, { useState } from 'react';

import { PropsChildren } from '../types/globalTypes';

interface DeviceType {
   deviceTypeIsPhone: boolean | null;
   setDeviceTypeIsPhone: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const DeviceContex = React.createContext<DeviceType>({
   deviceTypeIsPhone: false || null,
   setDeviceTypeIsPhone: () => {},
});

export const DeviceContextProvider: React.FC<PropsChildren> = ({ children }) => {
   const [deviceTypeIsPhone, setDeviceTypeIsPhone] = useState<null | boolean>(null);

   return (
      <DeviceContex.Provider value={{ deviceTypeIsPhone, setDeviceTypeIsPhone }}>
         {children}
      </DeviceContex.Provider>
   );
};

export default DeviceContex;

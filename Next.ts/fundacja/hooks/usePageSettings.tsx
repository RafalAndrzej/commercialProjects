import { useContext, useEffect } from 'react';

import DeviceContext from '../context/deviceContext';
import HelperContext from '../context/helperContext';

function usePageSettings() {
   const deviceCtx = useContext(DeviceContext);
   const helperCtx = useContext(HelperContext);

   useEffect(() => {
      deviceCtx.setDeviceTypeIsPhone(window.innerWidth < 1000);
      window.addEventListener('resize', () => deviceCtx.setDeviceTypeIsPhone(window.innerWidth < 1000));

      // Adding contrast to page
      helperCtx.helperColor
         ? document.body.setAttribute('helper-color', `${helperCtx.helperColor}`)
         : document.body.removeAttribute('helper-color');

      // Setting fontSize
      document.documentElement.style.setProperty('--pageFontSize', helperCtx.fontSize + 'px');

      return () => {
         window.removeEventListener('resize', () => deviceCtx.setDeviceTypeIsPhone(window.innerWidth < 1000));
      };
   }, [deviceCtx, helperCtx]);
}

export default usePageSettings;

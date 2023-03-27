import { useContext } from 'react';

import DeviceContext from '../../context/deviceContext';

import MobilNav from './mobilNav/MobilNav';
import PageList from './pageList';
import RestNavigation from './restNavigation/RestNavigation';

import classes from './index.module.css';

const Header: React.FC = () => {
   const deviceCtx = useContext(DeviceContext);
   return (
      <header className={classes['header-box']}>
         {deviceCtx.deviceTypeIsPhone ? <MobilNav /> : <PageList />}
         <RestNavigation />
      </header>
   );
};

export default Header;

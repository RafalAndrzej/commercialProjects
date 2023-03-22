import Image from 'next/image';

import HamburgerOpen from './hamburgerMenu/HamburgerOpen';
import HamburgerClose from './hamburgerMenu/HamburgerClose';
import classes from './index.module.css';
import PopUpLink from '../menuList/MenuListLink';

const MobileNav: React.FC<{ menuState: boolean }> = (props) => {
   return (
      <nav className={classes.nav}>
         <PopUpLink href="/">
            <Image src="/img/smallLogo/5Tnf9dVT9W780nnS.png" alt="Small Logo" width={60} height={70} />
         </PopUpLink>
         {props.menuState ? <HamburgerClose /> : <HamburgerOpen />}
      </nav>
   );
};

export default MobileNav;

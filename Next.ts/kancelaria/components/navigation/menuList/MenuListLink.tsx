import Link from 'next/link';
import React, { useContext } from 'react';
import MenuContext from '../../../context/menuContext';

const PopUpLink: React.FC<{ href: string; children: React.ReactNode }> = (props) => {
   const menuCtx = useContext(MenuContext);

   return menuCtx.menuVisible ? (
      <Link onClick={menuCtx.menuVisibleHandler} href={props.href}>
         {props.children}
      </Link>
   ) : (
      <Link href={props.href}>{props.children}</Link>
   );
};

export default PopUpLink;

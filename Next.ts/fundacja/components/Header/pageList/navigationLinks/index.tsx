import Link from 'next/link';
import { useRouter } from 'next/router';

import { useContext } from 'react';

import DeviceContext from '../../../../context/deviceContext';
import MobileMenuContext from '../../../../context/mobilMenuContext';

import { PropsChildren } from '../../../../types/globalTypes';

import classes from './index.module.css';

const NavigationLinks: React.FC<{ href: string } & PropsChildren> = ({ href, children }) => {
   const router = useRouter();

   const deviceCtx = useContext(DeviceContext);
   const mobileMenuCtx = useContext(MobileMenuContext);

   const className =
      router.pathname.slice(1).toLocaleLowerCase() ===
         children?.toString().toLocaleLowerCase().replaceAll(' ', '') ||
      (router.pathname === '/' &&
         children?.toString().toLocaleLowerCase().replaceAll(' ', '') === 'stronagłówna')
         ? classes.active
         : undefined;

   // @media hover:hover
   function mouseOverHandlerFn(event: React.MouseEvent<HTMLAnchorElement>) {
      const siblings = Array.from((event.currentTarget as Element).parentElement!.children);

      // remove active class form siblings
      siblings.forEach((el) => el.removeAttribute('class'));
      // add active class to target element
      (event.currentTarget as Element).classList.add(classes.active);
   }
   function mouseLeaveHandlerFn(event: React.MouseEvent<HTMLAnchorElement>) {
      const siblings = Array.from((event.currentTarget as Element).parentElement!.children);

      // remove active class form siblings
      siblings.forEach((el) => {
         el.removeAttribute('class');
      });
      // add active class to element base on router.pathname
      if (router.pathname === '/') {
         siblings
            .find((el) => el.innerHTML.toLocaleLowerCase().replaceAll(' ', '') === 'stronagłówna')
            ?.classList.add(classes.active);
      } else {
         siblings
            .find(
               (el) =>
                  el.innerHTML.toLocaleLowerCase().replaceAll(' ', '') ===
                  router.pathname.slice(1).toLocaleLowerCase()
            )
            ?.classList.add(classes.active);
      }
   }

   // @media hover:none
   function mouseClickFn(event: React.MouseEvent<HTMLAnchorElement>) {
      const siblings = Array.from((event.currentTarget as Element).parentElement!.children);

      // remove active class form siblings
      siblings.forEach((el) => el.removeAttribute('class'));
      // add active class to target element
      (event.currentTarget as Element).classList.add(classes.active);
   }

   //Mobil device
   if (deviceCtx.deviceTypeIsPhone) {
      return (
         <Link
            className={className}
            href={href}
            onClick={(event: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLDivElement>) => {
               mouseClickFn(event as React.MouseEvent<HTMLAnchorElement>);
               mobileMenuCtx.setMobileMenuIsOpen(false);
            }}>
            {children}
         </Link>
      );
   } else {
      //Desktop device
      return (
         <Link
            className={className}
            href={href}
            onMouseEnter={mouseOverHandlerFn}
            onMouseLeave={mouseLeaveHandlerFn}>
            {children}
         </Link>
      );
   }
};

export default NavigationLinks;

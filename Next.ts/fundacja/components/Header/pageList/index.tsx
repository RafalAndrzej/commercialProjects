import NavigationLinks from './navigationLinks';
import classes from './index.module.css';

const PageList: React.FC = () => {
   return (
      <ul className={classes.box}>
         <NavigationLinks href={'/'}>Strona główna</NavigationLinks>
         <NavigationLinks href={'/oFundacji'}>O Fundacji</NavigationLinks>
         <NavigationLinks href={'/chcePomoc'}>Chcę pomóc</NavigationLinks>
         <NavigationLinks href={'/jakPomagamy'}>Jak pomagamy</NavigationLinks>
         <NavigationLinks href={'/darczyńcy'}>Darczyńcy</NavigationLinks>
         <NavigationLinks href={'/kontakt'}>Kontakt</NavigationLinks>
      </ul>
   );
};

export default PageList;

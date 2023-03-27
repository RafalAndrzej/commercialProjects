import NavigationLinks from './navigationLinks';
import classes from './index.module.css';

const PageList: React.FC = () => {
   return (
      <ul className={classes.box}>
         <NavigationLinks href={'/'}>Strona główna</NavigationLinks>
         <NavigationLinks href={'/oFundacji'}>O Fundacji</NavigationLinks>
         <NavigationLinks href={'/ChcęPomóc'}>Chcę pomóc</NavigationLinks>
         <NavigationLinks href={'/JakPomagamy'}>Jak pomagamy</NavigationLinks>
         <NavigationLinks href={'/Darczyńcy'}>Darczyńcy</NavigationLinks>
         <NavigationLinks href={'/Kontakt'}>Kontakt</NavigationLinks>
      </ul>
   );
};

export default PageList;

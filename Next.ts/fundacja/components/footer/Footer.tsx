import classes from './Footer.module.css';

const Footer: React.FC = () => {
   return (
      <div className={classes.box}>
         <strong>Razem jesteśmy w stanie pomagać</strong> - <span>dziękujemy!</span>
      </div>
   );
};

export default Footer;

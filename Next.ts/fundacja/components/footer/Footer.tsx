import classes from './Footer.module.css';

const Footer: React.FC = () => {
   return (
      <div className={classes.footer}>
         <div>
            <h2>
               Fundacja <span>&quot;Family&quot;</span>
            </h2>
            <h3>Organizacja pożytku publicznego</h3>
         </div>
         <div>
            <h4>NIP: 9291862069</h4>
            <h4>Regon: 360150640</h4>
            <h4>
               <span>KRS:</span> 0000532934
            </h4>
         </div>
         <div>
            <a href="mailto:info@fundacjafamily.com" rel="noreferrer">
               info@fundacjafamily.com
            </a>
         </div>
      </div>
   );
};

export default Footer;

import classes from './daneFundacji.module.css';

const DaneFundacji: React.FC = () => {
   return (
      <div className={classes.dane}>
         <h2>
            Fundacja <span>&quot;Family&quot;</span>
         </h2>
         <h3>
            Status Prawny: <span>Fundacja</span>
         </h3>
         <h4>NIP: 9291862069</h4>
         <h4>Regon: 360150640</h4>
         <h4>KRS: 0000532934</h4>
      </div>
   );
};

export default DaneFundacji;

import classes from './DoKontaktu.module.css';

const DoKontaktu: React.FC = () => {
   return (
      <section className={classes.box}>
         <div>
            <h3>Zapraszamy do kontaktu!</h3>
            <p>
               Wszystkich informacji związanych z dokonywanymi w naszej Kancelarii czynnościami notarialnymi
               notariusze oraz pracownicy Kancelarii udzielają bezpłatnie bezpośrednio w biurze lub
               telefonicznie.
            </p>
         </div>
      </section>
   );
};

export default DoKontaktu;

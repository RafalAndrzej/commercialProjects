import classes from './DaneKontaktowe.module.css';

const DaneKontaktowe: React.FC<{ className?: string }> = (props) => {
   return (
      <div
         className={props.className ? `${classes['dane-firmy']} ${props.className}` : classes['dane-firmy']}>
         <div>
            <h2>Kancelaria Notarialna</h2>
            <p>Alicja Świergot, Karolina Pawełczyk s.c.</p>
         </div>
         <p>Sokolska 30/U11 / 40-086 Katowice</p>
         <div>
            <a href="tel:322570149">T: 32 257 01 49</a> / <a href="tel:+48507248455">507 248 455</a>
         </div>
         <div>
            <a href="mailto:biuro@notariusze-sokolska.pl">E: biuro@notariusze-sokolska.pl</a>
         </div>
         <a href={'https://www.instagram.com/szpilkiwnotariacie/'} target="_blank" rel="noreferrer">
            Instagram
         </a>
      </div>
   );
};

export default DaneKontaktowe;

const LetterSize: React.FC<{ changeLetterSize: () => void }> = (props) => {
   return (
      <button onClick={props.changeLetterSize}>
         <span>A</span>
      </button>
   );
};

export default LetterSize;

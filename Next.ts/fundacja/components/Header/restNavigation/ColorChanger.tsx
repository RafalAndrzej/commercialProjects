import { useContext } from 'react';

import ColorHelperContext from '../../../context/helperContext';

const ColorChanger: React.FC<{ changeColor: boolean }> = (props) => {
   const colorHelperCtx = useContext(ColorHelperContext);

   function colorChangerHandler() {
      colorHelperCtx.setHelperColor(props.changeColor);
   }

   return <button onClick={colorChangerHandler}></button>;
};

export default ColorChanger;

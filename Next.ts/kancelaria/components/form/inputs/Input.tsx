import { useState, useEffect } from 'react';

import useInput from './use-input';

import { InputProps, ValueStateInput } from '../../../types/inputType';

const Input: React.FC<InputProps> = (props) => {
   const [typedValue, setTypedValue] = useState('');

   const { isValid, isTouched } = useInput(
      props.createInput.validationCheck,
      typedValue,
      props.createInput.id
   );

   function onChangeHandler(
      event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
   ) {
      setTypedValue(event.currentTarget.value);
   }

   //Update state object in Form
   const setInputTypedState = props.createInput.setInputValue;
   useEffect(() => {
      setInputTypedState((curValue) => {
         const newValueState = {
            ...curValue,
            [props.createInput.id as keyof ValueStateInput]: {
               text: typedValue,
               isTouched: isTouched,
               isValid: isValid,
            },
         };

         return newValueState;
      });
   }, [isValid, typedValue, isTouched, props.createInput.id, setInputTypedState]);

   // On error infoText
   let errorTextHandler = '';
   if (
      props.createInput.id === 'nameInput' ||
      props.createInput.id === 'lastNameInput' ||
      props.createInput.id === 'topicInput'
   ) {
      errorTextHandler = 'Pole może zawierać wyłącznie litery';
   }
   if (props.createInput.id === 'emailInput') {
      errorTextHandler = 'Pole musi zawierać " @ " oraz " . "';
   }
   if (props.createInput.id === 'phoneInput') {
      errorTextHandler =
         'numer telefonu musi składać się z minimóm 9 cyfr w formacie: 444-444-444 lub 444444444';
   }
   if (props.createInput.id === 'textInput') {
      errorTextHandler = 'Pole nie może być krótsze niż 20 znaków';
   }

   return (
      <>
         <label htmlFor={props.createInput.id}>{props.children}</label>
         {props.createInput.type === 'textArea' ? (
            <textarea
               id={props.createInput.id}
               value={props.createInput.inputValue[props.createInput.id as keyof ValueStateInput].text}
               onChange={onChangeHandler}></textarea>
         ) : (
            <input
               style={
                  ((!isValid && isTouched
                     ? { borderBottom: '1px solid var(--text-error-color)' }
                     : null) as React.CSSProperties) || null
               }
               type={props.createInput.type}
               id={props.createInput.id}
               value={props.createInput.inputValue[props.createInput.id as keyof ValueStateInput].text}
               onChange={onChangeHandler}></input>
         )}
         {!isValid &&
            props.createInput.inputValue[props.createInput.id as keyof ValueStateInput].isTouched && (
               <p
                  style={{
                     color: 'var(--text-error-color)',
                     textAlign: 'center',
                     fontWeight: 'bold',
                     fontSize: '1rem',
                  }}>
                  {errorTextHandler}
               </p>
            )}
      </>
   );
};
export default Input;

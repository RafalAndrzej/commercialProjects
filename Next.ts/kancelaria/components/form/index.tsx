import { useState } from 'react';

import Input from './inputs/Input';

import { BackendInputValidation, ValueStateInput } from '../../types/inputType';
import classes from './index.module.css';

// Validation Types
const isNotEmpty = (value: string) => value.trim() !== '' && value.trim().length > 0;
const isEmail = (value: string) => value.includes('.') && value.includes('@');
const minLenght = (content: string, value: number) => content.toString().length >= value;
const isNumber = (content: number) => isNaN(content);
const isLetter = (content: string) => content.match(/[a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻ]/g);

const initalValueState: ValueStateInput = {
   nameInput: { text: '', isTouched: false, isValid: false },
   lastNameInput: { text: '', isTouched: false, isValid: false },
   emailInput: { text: '', isTouched: false, isValid: false },
   phoneInput: { text: '', isTouched: false, isValid: false },
   topicInput: { text: '', isTouched: false, isValid: false },
   textInput: { text: '', isTouched: false, isValid: false },
};

const initialValidationState: BackendInputValidation = {
   message: {
      isValid: '',
      onError: {
         info: '',
         toAvoidError: '',
      },
   },
   typedValue: '',
};

const Form: React.FC = () => {
   const [inputValue, setInputValue] = useState(initalValueState);
   const [validationState, setValidationState] = useState(initialValidationState);
   const [sendingState, setSendingState] = useState('');

   const formIsValid =
      inputValue.nameInput.isValid &&
      inputValue.lastNameInput.isValid &&
      inputValue.emailInput.isValid &&
      inputValue.phoneInput.isValid &&
      inputValue.textInput.isValid &&
      inputValue.topicInput.isValid;

   const formIsTouched =
      inputValue.nameInput.isTouched ||
      inputValue.lastNameInput.isTouched ||
      inputValue.emailInput.isTouched ||
      inputValue.phoneInput.isTouched ||
      inputValue.textInput.isTouched ||
      inputValue.topicInput.isTouched;

   function formSubmitHandler(event: React.FormEvent) {
      event.preventDefault();

      setSendingState('is sending');

      // sending data
      fetch('/api', {
         method: 'POST',
         body: JSON.stringify(inputValue),
         headers: {
            'Content-Type': 'application/json',
         },
      })
         .then((response) => response.json())
         .then(function (data: BackendInputValidation) {
            setValidationState(data);
            setSendingState('ok');
         });

      setInputValue(initalValueState);
   }

   return (
      <form className={classes.form} onSubmit={formSubmitHandler}>
         <div className={classes.input}>
            <Input
               createInput={{
                  type: 'text',
                  id: 'nameInput',
                  validationCheck: { currentValue: inputValue, isNotEmpty, isLetter },
                  inputValue,
                  setInputValue,
               }}>
               Imie
            </Input>
         </div>
         <div className={classes.input}>
            <Input
               createInput={{
                  type: 'text',
                  id: 'lastNameInput',
                  validationCheck: { currentValue: inputValue, isNotEmpty, isLetter },
                  inputValue,
                  setInputValue,
               }}>
               Nazwisko
            </Input>
         </div>
         <div className={classes.input}>
            <Input
               createInput={{
                  type: 'email',
                  id: 'emailInput',
                  validationCheck: { currentValue: inputValue, isEmail, isNotEmpty },
                  inputValue,
                  setInputValue,
               }}>
               e-mail
            </Input>
         </div>
         <div className={classes.input}>
            <Input
               createInput={{
                  type: 'text',
                  id: 'phoneInput',
                  validationCheck: { currentValue: inputValue, isNumber, minLenght },
                  inputValue,
                  setInputValue,
               }}>
               numer telefonu
            </Input>
         </div>
         <div className={classes.input}>
            <Input
               createInput={{
                  type: 'text',
                  id: 'topicInput',
                  validationCheck: { currentValue: inputValue, isNotEmpty },
                  inputValue,
                  setInputValue,
               }}>
               temat
            </Input>
         </div>
         <div className={classes.input}>
            <Input
               createInput={{
                  type: 'textArea',
                  id: 'textInput',
                  validationCheck: { currentValue: inputValue, isNotEmpty, minLenght },
                  inputValue,
                  setInputValue,
               }}>
               Wiadomość
            </Input>
         </div>
         <div className={classes.btn}>
            <button disabled={!formIsValid}>
               {!formIsValid && formIsTouched && (
                  <p className={classes.errorText}>Wszytskie pola muszą zostać prawidłowo wypełnione...</p>
               )}
               <span>Wyślij</span>
            </button>
         </div>

         {/* spinner  */}
         {sendingState === 'is sending' && (
            <div className={`${classes['form-feedback']} ${classes.loader}`}>
               <p>sending.....</p>
               <div className={`${classes.loader} ${classes.spinner}`}></div>
            </div>
         )}

         {/* on Error */}
         {validationState?.message.isValid === 'error' && sendingState === 'ok' && (
            <div className={classes['form-feedback']}>
               <p>{validationState?.message.onError?.info}</p>
               <p>{validationState?.message.onError?.toAvoidError}</p>
               <p>{`Wprowadzone przez ciebie wiadomość to: "${validationState?.typedValue}"`}</p>
               <span
                  onClick={() => {
                     setValidationState(initialValidationState);
                  }}>
                  Prosimy spróbuj raz jeszcze
               </span>
            </div>
         )}

         {/* success mesage send */}
         {validationState?.message.isValid === 'Prawidłowo  wypełniony formularz !!' &&
            sendingState === 'ok' && (
               <div className={classes['form-feedback']}>
                  <p>Dziękujemy za przesłanie wiadomości !</p>
                  <p>Wiadomość została wysana poprawnie</p>
                  <p>Odezwiemy się w najbliższym możliwym terminie</p>
                  <span
                     onClick={() => {
                        setValidationState(initialValidationState);
                     }}>
                     Wyślij nową wiadomość
                  </span>
               </div>
            )}
      </form>
   );
};

export default Form;

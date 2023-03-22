import { ValueStateInput } from '../types/inputType';

// Validation Types
const isNotEmpty = (value: string) => value.trim() !== '' && value.trim().length > 0;
const isEmail = (value: string) => value.includes('.') && value.includes('@');
const minLenght = (content: string, value: number) => content.toString().length >= value;
const isNumber = (content: number) => typeof content === 'number';
const isLetter = (content: string) => content.match(/[a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻ]/g);

export function inputValidation(inputValues: ValueStateInput) {
   // validation receiving input values
   const data: ValueStateInput = {
      ...inputValues,
      nameInput: {
         ...inputValues.nameInput,
         isValid:
            isNotEmpty(inputValues.nameInput.text) &&
            isLetter(inputValues.nameInput.text) !== null &&
            isLetter(inputValues.nameInput.text)?.length === inputValues.nameInput.text.length,
      },
      lastNameInput: {
         ...inputValues.lastNameInput,
         isValid:
            isNotEmpty(inputValues.lastNameInput.text) &&
            isLetter(inputValues.lastNameInput.text) !== null &&
            isLetter(inputValues.lastNameInput.text)?.length === inputValues.lastNameInput.text.length,
      },
      emailInput: {
         ...inputValues.emailInput,
         isValid: isEmail(inputValues.emailInput.text) && isNotEmpty(inputValues.emailInput.text),
      },
      phoneInput: {
         ...inputValues.phoneInput,
         text:
            inputValues.phoneInput.text.toString().match(/-/g) === null
               ? inputValues.phoneInput.text.trim()
               : inputValues.phoneInput.text.trim().replaceAll('-', ''),
         isValid: isNumber(+inputValues.phoneInput.text) && minLenght(inputValues.phoneInput.text, 9),
      },
      topicInput: {
         ...inputValues.topicInput,
         isValid: isNotEmpty(inputValues.topicInput.text),
      },
      textInput: {
         ...inputValues.textInput,
         isValid: isNotEmpty(inputValues.textInput.text) && minLenght(inputValues.textInput.text, 20),
      },
   };

   return data;
}

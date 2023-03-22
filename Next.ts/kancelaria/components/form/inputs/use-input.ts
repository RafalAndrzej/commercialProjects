import { InputValidation } from '../../../types/inputType';

const useInput = (props: InputValidation, typeValue: string, id: string) => {
   let isValid = false;
   let isTouched = false;

   if (typeValue) {
      isTouched = true;
   }

   if ((id === 'nameInput' || id === 'lastNameInput') && props.isLetter && props.isNotEmpty) {
      props.isLetter(typeValue) !== null &&
      props.isLetter(typeValue)?.length === typeValue.length &&
      props.isNotEmpty(typeValue)
         ? (isValid = true)
         : (isValid = false);
   }

   if (id === 'topicInput' && props.isNotEmpty) {
      isValid = props.isNotEmpty(typeValue);
   }
   if (id === 'textInput' && props.isNotEmpty && props.minLenght) {
      isValid = props.isNotEmpty(typeValue) && props.minLenght(typeValue, 20);
   }
   if (id === 'emailInput' && props.isNotEmpty && props.isEmail) {
      isValid = props.isNotEmpty(typeValue) && props.isEmail(typeValue);
   }
   if (props.isNumber && props.minLenght) {
      const typedPhoneNumber = typeValue.trim().replaceAll('-', '');
      isValid = !props.isNumber(+typedPhoneNumber) && props.minLenght(typedPhoneNumber, 9);
   }

   return {
      isValid,
      isTouched,
   };
};

export default useInput;

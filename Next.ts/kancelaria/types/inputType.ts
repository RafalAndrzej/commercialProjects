export interface InputProps {
   children: React.ReactNode;
   createInput: CreateInput;
}

export interface ValueStateInput {
   nameInput: {
      text: string;
      isTouched: boolean;
      isValid: boolean;
   };
   lastNameInput: {
      text: string;
      isTouched: boolean;
      isValid: boolean;
   };
   emailInput: {
      text: string;
      isTouched: boolean;
      isValid: boolean;
   };
   phoneInput: {
      text: string;
      isTouched: boolean;
      isValid: boolean;
   };
   topicInput: {
      text: string;
      isTouched: boolean;
      isValid: boolean;
   };
   textInput: {
      text: string;
      isTouched: boolean;
      isValid: boolean;
   };
}

export interface CreateInput {
   type: string;
   id: string;
   inputValue: ValueStateInput;
   setInputValue: React.Dispatch<React.SetStateAction<ValueStateInput>>;
   validationCheck: InputValidation;
   minLenght?: number;
   maxLenght?: number;
}

export interface InputValidation {
   currentValue: ValueStateInput;
   isNotEmpty?: (value: string) => boolean;
   isEmail?: (value: string) => boolean;
   minLenght?: (content: string, value: number) => boolean;
   isNumber?: (content: number) => boolean;
   isLetter?: (content: string) => RegExpMatchArray | null;
}

export interface BackendInputValidation {
   message: {
      isValid: string;
      onError: {
         info: string;
         toAvoidError: string;
      } | null;
   };
   typedValue: string;
}

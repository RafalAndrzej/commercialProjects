import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

import { inputValidation } from '../../helpers/inputValidation';

import { BackendInputValidation, ValueStateInput } from '../../types/inputType';

async function handler(req: NextApiRequest, res: NextApiResponse) {
   if (req.method === 'POST') {
      const inputValues: ValueStateInput = req.body;

      // validation receiving input values
      const data = inputValidation(inputValues);

      // returning errors

      if (!data.nameInput.isValid) {
         res.status(422).json({
            message: {
               isValid: 'error',
               onError: {
                  info: 'nieprawidłowe Imie',
                  toAvoidError: 'Pole może zawierać wyłącznie litery',
               },
            },
            typedValue: inputValues.nameInput.text,
         } as BackendInputValidation);
         return;
      }
      if (!data.lastNameInput.isValid) {
         res.status(422).json({
            message: {
               isValid: 'error',
               onError: {
                  info: 'nieprawidłowe Nazwisko',
                  toAvoidError: 'Pole może zawierać wyłącznie litery',
               },
            },
            typedValue: inputValues.lastNameInput.text,
         } as BackendInputValidation);
         return;
      }
      if (!data.emailInput.isValid) {
         res.status(422).json({
            message: {
               isValid: 'error',
               onError: {
                  info: 'nieprawidłowy adres e-maila',
                  toAvoidError: 'Pole musi zawierać "@" oraz "."',
               },
            },
            typedValue: inputValues.emailInput.text,
         });
         return;
      }
      if (!data.phoneInput.isValid) {
         res.status(422).json({
            message: {
               isValid: 'error',
               onError: {
                  info: 'nieprawidłowy Numer telefonu',
                  toAvoidError:
                     'Pole musi zawierać wyłącznie cyfry w formacie "333333333" lub "333-333-333" i składać się z więcej niż 9 cyfr',
               },
            },
            typedValue: inputValues.phoneInput.text,
         });
         return;
      }
      if (!data.topicInput.isValid) {
         res.status(422).json({
            message: {
               isValid: 'error',
               onError: {
                  info: 'nieprawidłowy Temat wiadomości',
                  toAvoidError: 'Pole może zawierać wyłącznie litery',
               },
            },
            typedValue: inputValues.topicInput.text,
         });
         return;
      }
      if (!data.textInput.isValid) {
         res.status(422).json({
            message: {
               isValid: 'error',
               onError: {
                  info: 'nieprawidłowa Wiadomość',
                  toAvoidError: 'Pole nie może być krótsze niż 20 znaków',
               },
            },
            typedValue: inputValues.textInput.text,
         });
         return;
      }

      // if input values is valid
      if (
         data.nameInput.isValid &&
         data.lastNameInput.isValid &&
         data.emailInput.isValid &&
         data.phoneInput &&
         data.topicInput.isValid &&
         data.textInput.isValid
      ) {
         try {
            const transporter = nodemailer.createTransport({
               service: process.env.service,
               host: process.env.hostname,
               port: 465,
               secure: true,
               auth: {
                  user: process.env.SMTP_USER,
                  pass: process.env.SMTP_PASSWORD,
               },
            });

            const email = {
               from: process.env.SMTP_USER,
               to: ['randrzejczak86@gmail.com', 'ania.alencynowicz@gmail.com'],
               subject: 'Wiadomość wysłana ze strony www ',
               html: `
               <div style="background-color: #fff; font-size: 16px; padding: 10px; border: 1px solid #cdb5a7; display:flex; flex-align: center; flex-justify: center; flex-direction: column; flex-gap: 10px">
                  <h1 style='color:#cdb5a7'>Wiadomość wysłana ze strony www </h1>
                  <h3>Temat wiadomości: <br>
                  <span style='padding: 5px; display:block'>${data.topicInput.text}</span></h3>
                  <p style='margin-left: 30px'>Imię i nazwisko: ${data.nameInput.text} ${data.lastNameInput.text}</p>
                  <p style='margin-left: 30px'>Numeru telefonu: ${data.phoneInput.text}</p>
                  <p style='margin-left: 30px'>E-maila: ${data.emailInput.text}</p>
                  <p>Treść wiadomości: <br>
                  <span style='padding: 5px; display:block'>"${data.textInput.text}"</span></p>
               </div>
                  `,
               headers: { 'x-myheader': 'test header' },
            };

            await transporter.sendMail(email);

            res.status(201).json({
               message: {
                  isValid: 'Prawidłowo  wypełniony formularz !!',
               },
            } as BackendInputValidation);
         } catch (error: any) {
            console.log(error.message);
            res.status(304).json({
               message: {
                  isValid: 'error',
                  onError: {
                     info: 'server error',
                     toAvoidError: 'Please try again',
                  },
               },
               typedValue: inputValues.textInput.text,
            });
         }
      }
   } else {
      res.redirect(307, '/');
   }
}

export default handler;

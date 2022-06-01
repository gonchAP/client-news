import * as Yup from 'yup';

const passwordValidation = Yup.string()
  .min(6, 'Длина должна быть не менее 6 символов')
  .max(12, 'Длина должна быть не более 12 символов')
  .matches(/^\S+[a-zA-Z0-9]$/, 'Password can only contain Latin letters.')
  .required('Поле не может быть пустым');

const nameValidation = (label) => Yup.string()
  .min(2, `${label} длина должна быть не менее 2 символов`)
  .max(12, `${label} длина должна быть не более 12 символов`)
  .required('Поле не может быть пустым');

const loginValidation = Yup.string()
  .min(4, 'Длина должна быть не менее 4 символов')
  .max(12, 'Длина должна быть не более 12 символов')
  .required('Поле не может быть пустым');

export const registrValidationSchema = Yup.object({
  firstName: nameValidation('Name'),
  lastName: nameValidation('Last name'),
  login: loginValidation,
  password: passwordValidation,
  confirmPassword: passwordValidation
    .oneOf([Yup.ref('password')], 'Пароли не совпадают'),
  email: Yup.string().email('Неверный адрес электронной почты').required('Поле не может быть пустым'),
});

export const loginValidationSchema = Yup.object({
  login: loginValidation,
  password: passwordValidation,
});

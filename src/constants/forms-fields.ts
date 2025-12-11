import { FieldProps } from "../interfaces";

export const personalInfoFields: FieldProps[] = [
  { name: "name", label: "Nombre" },
  { name: "lastName", label: "Apellido" },
  {
    name: "dateOfBirth",
    label: "Fecha de nacimiento",
    type: "date",
  },
  { name: "ci", label: "CI o Pasaporte" },
  { name: "phone", label: "Teléfono" },

  { name: "licence", label: "Licencia de conducción" },
];

export const addressInfoFields: FieldProps[] = [
  { name: "address1", label: "Dirección 1", type: "text" },
  { name: "address2", label: "Dirección 2", type: "text" },
  {
    name: "country",
    label: "País de residencia",
    type: "select",
  },
  { name: "province", label: "Provincia o estado" },
  { name: "postalCode", label: "Código Postal" },
];

export const accountInfoFields: FieldProps[] = [
  { name: "email", label: "Correo", type: "email" },
  { name: "username", label: "Nombre de usuario" },
  {
    name: "password",
    label: "Contraseña",
    type: "password",
  },
  {
    name: "confirmPassword",
    label: "Contraseña",
    type: "password",
  },
  { name: "profileImage", label: "Imagen de perfil", type: 'file'},
];

import * as yup from "yup";
import { isOldEnough } from "../functions";

export const userValidationSchemas = [
  //Personal information
  yup.object({
    name: yup.string().required("El nombre es obligatorio"),
    lastName: yup
      .string()
      .required("El apellido es obligatorio"),
    dateOfBirth: yup
      .date()
      .typeError("Debe ser una fecha válida")
      .required("La fecha de nacimiento es obligatoria")
      .test(
        "is-18",
        "Debes tener al menos 18 años",
        (value) => (value ? isOldEnough(value, 18) : false)
      ),
    ci: yup
      .string()
      .required("El pasaporte es obligatorio"),
    phone: yup
      .string()
      .matches(/^[0-9]+$/, "Solo se permiten números")
      .min(8, "El teléfono debe tener al menos 8 dígitos")
      .required("El teléfono es obligatorio"),

    licence: yup
      .string()
      .matches(
        /^[A-Za-z0-9-]+$/,
        "La licencia solo puede contener letras, números y guiones"
      )
      .min(
        5,
        "La licencia debe tener al menos 5 caracteres"
      )
      .required("El número de licencia es obligatorio"),
  }),
  //Address information
  yup.object({
    address1: yup
      .string()
      .required("La dirección es obligatoria"),
    address2: yup.string(),
    country: yup
      .string()
      .required("Seleccione su país de residencia"),
    province: yup
      .string()
      .required("La provincia o estado es obligatoria"),
    postalCode: yup
      .string()
      .matches(
        /^[A-Za-z0-9\s-]+$/,
        "Código postal inválido"
      )
      .required("El código postal es obligatorio"),
  }),
  //Account information
  yup.object({
    profileImage: yup
      .string()
      .nullable()
      .required("La imagen es obligatoria"),
    username: yup
      .string()
      .required("El nombre de usuario es obligatorio"),
    password: yup
      .string()
      .required("La contraseña es obligatoria")
      .min(
        8,
        "La contraseña debe tener al menos 8 caracteres"
      )
      .matches(
        /[A-Z]/,
        "Debe contener al menos una letra mayúscula"
      )
      .matches(
        /[a-z]/,
        "Debe contener al menos una letra minúscula"
      )
      .matches(/[0-9]/, "Debe contener al menos un número")
      .matches(
        /[^A-Za-z0-9]/,
        "Debe contener al menos un carácter especial"
      )
      .matches(/^\S*$/, "No debe contener espacios"),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "Las contraseñas no coinciden"
      )
      .required("Debes confirmar tu contraseña"),
    email: yup
      .string()
      .email("Debe ser un correo válido")
      .required("El correo es obligatorio"),
  }),
];

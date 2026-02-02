import * as yup from "yup";
import { isOldEnough } from "../utils";

export const userValidationSchemas = [
  // Personal Information
  yup.object({
    name: yup
      .string()
      .required("name"),
    lastName: yup
      .string()
      .required("lastName"),
    dateOfBirth: yup
      .date()
      .typeError("DOB.validation")
      .required("DOB.mandatory")
      .test(
        "is-18",
        "DOB.oldEnaough",
        (value) => (value ? isOldEnough(value, 18) : false)
      ),
    ci: yup
      .string()
      .required("ci"),
    phone: yup
      .string()
      .matches(/^[0-9]+$/, "phone.numbersOnly")
      .min(8, "phone.minLength")
      .required("phone.mandatory"),
    licence: yup
      .string()
      .matches(
        /^[A-Za-z0-9-]+$/,
        "licence.invalidChars"
      )
      .min(5, "licence.minLength")
      .required("licence.mandatory"),
  }),

  // Address Information
  yup.object({
    address1: yup
      .string()
      .required("address1"),
    address2: yup.string(),
    country: yup
      .string()
      .required("country"),
    province: yup
      .string()
      .required("province"),
    postalCode: yup
      .string()
      .matches(/^[A-Za-z0-9\s-]+$/, "postalCode.invalid")
      .required("postalCode.mandatory"),
  }),

  // Account Information
  yup.object({
    profileImage: yup
      .string()
      .nullable()
      .required("profileImage"),
    username: yup
      .string()
      .required("username"),
    password: yup
      .string()
      .required("password.mandatory")
      .min(8, "password.minLength")
      .matches(/[A-Z]/, "password.uppercase")
      .matches(/[a-z]/, "password.lowercase")
      .matches(/[0-9]/, "password.number")
      .matches(/[^A-Za-z0-9]/, "password.specialChar")
      .matches(/^\S*$/, "password.noSpaces"),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "confirmPassword.mismatch"
      )
      .required("confirmPassword.mandatory"),
    email: yup
      .string()
      .email("email.invalid")
      .required("email.mandatory"),
  }),
];


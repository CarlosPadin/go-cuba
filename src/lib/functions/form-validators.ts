import * as yup from "yup";
import { userValidationSchemas } from "../schemas";
import { IUserFormData } from "@/src/interfaces";

//function to detect if a person is old enough to drive according toiys DOB
export const isOldEnough = (
  date: Date,
  minAge: number
): boolean => {
  const today = new Date();
  const ageDiff = today.getFullYear() - date.getFullYear();
  const hasBirthdayPassed =
    today.getMonth() > date.getMonth() ||
    (today.getMonth() === date.getMonth() &&
      today.getDate() >= date.getDate());
  const age = hasBirthdayPassed ? ageDiff : ageDiff - 1;
  return age >= minAge;
};

// function for getting the type of each schema on register form stepper
export const getSchemaForStep = (step: number) => {
  switch (step) {
    case 0:
      return userValidationSchemas[0] as yup.ObjectSchema<
        Partial<IUserFormData>
      >;
    case 1:
      return userValidationSchemas[1] as yup.ObjectSchema<
        Partial<IUserFormData>
      >;
    case 2:
      return userValidationSchemas[2] as yup.ObjectSchema<
        Partial<IUserFormData>
      >;
    default:
      return userValidationSchemas[0] as yup.ObjectSchema<
        Partial<IUserFormData>
      >;
  }
};

export const registerFormErrorMessage = (error: string) => {
  console.log("error: ", error)
  switch (error) {
    case "USERNAME_EXISTS":
      return "usernameAlreadyExist";
    case "EMAIL_EXISTS":
      return "emailAlreadyExist";
    case "CI_EXISTS":
      return "ciAlreadyExist";
    case "LICENCE_EXISTS":
      return "licenceAlreadyExist";
    default:
      return "formError";
  }
};

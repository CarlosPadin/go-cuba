export interface User {
  name: string;
  lastName: string;
  dateOfBirth: Date;
  ci: string;
  phone: string;
  licence: string;
  address1: string;
  address2?: string;
  country: string;
  province: string;
  postalCode: string;
  profileImage?: string;
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
}

export interface PersonalInfoFormData {
  name: string;
  lastName: string;
  dateOfBirth: Date;
  ci: string;
  phone: string;
  licence: string;
}

export interface AddressFormData {
  address1: string;
  address2?: string;
  country: string;
  province: string;
  postalCode: string;
}

export interface AccountFormData {
  profileImage?: string;
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
}

export type UserFormData = PersonalInfoFormData &
  AddressFormData &
  AccountFormData;

export interface FieldProps {
  name: keyof UserFormData;
  label: string;
  type?: string;
}

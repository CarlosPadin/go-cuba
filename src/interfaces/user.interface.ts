export interface User {
  address: string;
  dateOfBirth: Date;
  email: string;
  id: string;
  lastName: string;
  name: string;
  passport: string;
  password: string;
  phone: string;
  profileImage: string;
  rating: number;
  username: string;
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

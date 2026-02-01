export interface IUser {
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
  id: string;
}

export interface IPersonalInfoFormData {
  name: string;
  lastName: string;
  dateOfBirth: Date;
  ci: string;
  phone: string;
  licence: string;
}

export interface IAddressFormData {
  address1: string;
  address2?: string;
  country: string;
  province: string;
  postalCode: string;
}

export interface IAccountFormData {
  profileImage?: string;
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
}

export type IUserFormData = IPersonalInfoFormData &
  IAddressFormData &
  IAccountFormData;

export interface IExistingUserCheck {
  username: number | null;
  email:    number | null;
  ci:       number | null;
  licence:  number | null;
}

export interface FieldProps {
  name: keyof IUserFormData;
  label: string;
  type?: string;
}

export interface IUserProfile {
  username: string;
  name: string;
  lastName: string;
  email: string;
  dateOfBirth: Date;
  phone: string;
  ci: string;
  // licence: string;
  address1: string;
  address2?: string;
  country: string;
  province: string;
  postalCode: string;
  profile_image_url: string;
  password: string;
}
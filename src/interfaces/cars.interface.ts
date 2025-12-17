export interface ICarModel {
  name: string,
  carBrand: string,
}

export interface ICarImage {
  mainImage: string,
  images: string[],
}

export interface ICarCaracteristics {
  general: string[],
  rules: string[],
  features: string[],
}

export interface ICar {
  brand: string,
  caracteristics: ICarCaracteristics,
  carImage: ICarImage,
  carType: 'sedan' | 'suv' | 'sports',
  city: string,
  color: string,
  description: string,
  id: string,
  kilometers: number,
  model: ICarModel,
  ownerId: string,
  pickupLocation: string,
  powerType: 'gasoline' | 'diesel' | 'electric' | 'hybrid',
  price: number,
  reservedDates: Date[],
  transmissionType: 'manual' | 'automatic',
  year: number,
}

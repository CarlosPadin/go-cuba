export interface CarBrand {
  id: string,
  name: string
};
  
export interface CarModel {
  id: string,
  name: string,
  carBrand: string,
}

export interface CarImage {
  mainImage: string,
  images: string[],
}

export interface Caracteristics {
  general: string[],
  rules: string[],
  included: string[],  //features
}

export interface Car {
  brand: CarBrand,
  caracteristics: Caracteristics,
  carImage: CarImage,
  carType: 'sedan' | 'suv' | 'sports',
  city: string,
  color: string,
  description: string,
  id: string,
  kilometers: number,
  model: CarModel,
  ownerId: string,
  pickupLocation: string,
  powerType: 'gasoline' | 'diesel' | 'electric' | 'hybrid',
  price: number,
  reservedDates: Date[],
  transmissionType: 'manual' | 'automatic',
  year: number,
}
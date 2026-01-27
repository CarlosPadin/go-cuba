
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
  car_image: ICarImage,
  car_type: 'sedan' | 'suv' | 'sports' | 'pickup' | 'van',
  city: string,
  color: string,
  description: string,
  id: string,
  kilometers: number,
  model: string,
  owner_id: string,
  pickup_location: string,
  power_type: 'gasoline' | 'diesel' | 'electric' | 'hybrid',
  price: number,
  reserved_dates: Date[],
  transmission_type: 'manual' | 'automatic',
  year: number,
}

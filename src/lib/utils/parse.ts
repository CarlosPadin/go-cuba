import { ICar } from "@/src/interfaces";

const parseField = (field: any): any => {
  if (typeof field === "string") {
    try {
      return JSON.parse(field);
    } catch {
      return field;
    }
  }
  return field;
};

export const parseCar = (car: any): ICar => {
  return {
    ...car,
    caracteristics: parseField(car.caracteristics),
    car_image: parseField(car.car_image),
    reserved_dates: parseField(car.reserved_dates),
  } as ICar;
};
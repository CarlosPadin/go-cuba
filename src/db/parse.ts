import { Car } from "@/src/interfaces";

export const parseCar = (car: any): Car => {
  return {
    ...car,
    brand: typeof car.brand === "string" ? JSON.parse(car.brand) : car.brand,
    model: typeof car.model === "string" ? JSON.parse(car.model) : car.model,
    caracteristics: typeof car.caracteristics === "string" ? JSON.parse(car.caracteristics) : car.caracteristics,
    carImage: typeof car.carImage === "string" ? JSON.parse(car.carImage) : car.carImage,
    reservedDates: typeof car.reservedDates === "string" ? JSON.parse(car.reservedDates) : car.reservedDates,
  } as Car;
};

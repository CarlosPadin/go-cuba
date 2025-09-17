import { Database } from "better-sqlite3";
import { mockCars } from "@/src/mock";


export const createCarsTable = (db: Database) => {
  db.prepare(
    `CREATE TABLE IF NOT EXISTS cars (
    id TEXT PRIMARY KEY,
    brand_id TEXT NOT NULL,
    caracteristics TEXT NOT NULL,
    carImage TEXT NOT NULL,
    carType TEXT NOT NULL,
    city TEXT NOT NULL,
    color TEXT NOT NULL,
    description TEXT NOT NULL,
    kilometers INTEGER NOT NULL,
    model TEXT NOT NULL,
    ownerId TEXT NOT NULL,
    pickupLocation TEXT NOT NULL,
    powerType TEXT NOT NULL,
    price REAL NOT NULL,
    reservedDates TEXT NOT NULL,
    transmissionType TEXT NOT NULL,
    year INTEGER NOT NULL
  )`
  ).run();

}

export const seedCars = (db: Database) => {
const insertCar = db.prepare(`
    INSERT OR REPLACE INTO cars (
      id,
      brand_id,
      caracteristics,
      carImage,
      carType,
      city,
      color,
      description,
      kilometers,
      model,
      ownerId,
      pickupLocation,
      powerType,
      price,
      reservedDates,
      transmissionType,
      year
    ) VALUES (
      @id,
      @brand_id,
      @caracteristics,
      @carImage,
      @carType,
      @city,
      @color,
      @description,
      @kilometers,
      @model,
      @ownerId,
      @pickupLocation,
      @powerType,
      @price,
      @reservedDates,
      @transmissionType,
      @year
    )`);

   mockCars.forEach((car) => {
    insertCar.run({
      id: car.id,
      brand_id: car.brand.id,
      caracteristics: JSON.stringify(car.caracteristics),
      carImage: JSON.stringify(car.carImage),
      carType: car.carType,
      city: car.city,
      color: car.color,
      description: car.description,
      kilometers: car.kilometers,
      model: JSON.stringify(car.model),
      ownerId: car.ownerId,
      pickupLocation: car.pickupLocation,
      powerType: car.powerType,
      price: car.price,
      reservedDates: JSON.stringify(car.reservedDates),
      transmissionType: car.transmissionType,
      year: car.year,
    });
  });
};

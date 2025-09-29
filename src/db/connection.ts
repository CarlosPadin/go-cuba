import sql from 'better-sqlite3';
import { Car } from '../interfaces';
import { parseCar } from './parse';

const db = sql('yava.db');

// Function to get all cars from the database
export const getCars = () => {
  return db.prepare('SELECT * FROM cars').all();
};

// Function to get cars by their type, with an optional limit
export const getCarsByType = ({carType, limit}: {carType: string, limit?: number}): Car[] => {
  let query = 'SELECT * FROM cars WHERE carType = ?';
  if (limit) {
    query += ' LIMIT ?';
    const data = db.prepare(query).all(carType, limit) as Car[];
    return data.map(parseCar);
  }
  const data = db.prepare(query).all(carType) as Car[]; 
  return data.map(parseCar);
};

// Function to get one car by its ID
export const getCarById = (id: string): Car => {
  const car = db.prepare('SELECT * FROM cars WHERE id = ?').get(id) as Car;
  if (!car) throw new Error('Car not found');
  return parseCar(car);
}

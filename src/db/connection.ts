import sql from 'better-sqlite3';
import { ICar, IOwner } from '../interfaces';
import { parseCar } from './parse';

const db = sql('yava.db');

// Function to get all cars from the database
export const getCars = () => {
  return db.prepare('SELECT * FROM cars').all();
};

// Function to get cars by their type, with an optional limit
export const getCarsByType = ({carType, limit, excludeId}: {carType: string, limit?: number, excludeId?: string}): ICar[] => {
  let query = 'SELECT * FROM cars WHERE carType = ?';
  const params: (string | number)[] = [carType];

  if (excludeId) {
    query += ' AND id != ?';
    params.push(excludeId);
  }

  if (limit) {
    query += ' LIMIT ?';
    params.push(limit);
  }

  const data = db.prepare(query).all(...params) as ICar[];
  return data.map(parseCar);
};

// Function to get one car by its ID
export const getCarById = (id: string): ICar => {
  const car = db.prepare('SELECT * FROM cars WHERE id = ?').get(id) as ICar;
  if (!car) throw new Error('Car not found');
  return parseCar(car);
}


// Function to get one owner by its ID
export const getOwnerById = (id: string): IOwner => {
  const owner = db.prepare('SELECT * FROM owners WHERE id = ?').get(id) as IOwner;
  if (!owner) throw new Error('Owner not found');
  return owner;
}





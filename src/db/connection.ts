import sql from 'better-sqlite3';
import { Car } from '../interfaces';

const db = sql('yava.db');

export const getCars = () => {

  return db.prepare('SELECT * FROM cars').all();
};

export const getCarsByType = ({carType, limit}: {carType: string, limit?: number}): Car[] => {
  let query = 'SELECT * FROM cars WHERE carType = ?';
  if (limit) {
    query += ' LIMIT ?';
    return db.prepare(query).all(carType, limit) as Car[];
  }
  return db.prepare(query).all(carType) as Car[];
};

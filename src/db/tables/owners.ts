import { Database } from "better-sqlite3";
import { mockOwners } from "@/src/mock";

export const createOwnersTable = (db: Database) => {
  db.prepare(
    `CREATE TABLE IF NOT EXISTS owners (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      lastName TEXT NOT NULL,
      ci TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      address TEXT NOT NULL,
      profileImage TEXT NOT NULL,
      rating REAL NOT NULL
    )`
  ).run();
};

export const seedOwners = (db: Database) => {
  const insertOwner = db.prepare(`
    INSERT OR REPLACE INTO owners (
      id, 
      name, 
      lastName,
      ci, 
      email, 
      phone, 
      address, 
      profileImage, 
      rating
    ) VALUES (
      @id, 
      @name, 
      @lastName,
      @ci, 
      @email, 
      @phone, 
      @address, 
      @profileImage, 
      @rating
    )`);

  mockOwners.forEach((owner) => {
    insertOwner.run(owner);
  });
};

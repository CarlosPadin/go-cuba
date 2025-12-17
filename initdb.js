import sql from "better-sqlite3";
// import { createCarsTable, createOwnersTable, seedCars, seedOwners } from "./src/db/tables";

const db = sql("yava.db");


export const mockCars = [
  {
    brand: "Audi",
    caracteristics: {
      general: [
        "5 seats",
        "Air Conditioning",
        "Alloy Wheels",
        "Bluetooth",
      ],
      rules: ["No Smoking", "No Pets"],
      features: ["Insurance", "Roadside Assistance"],
    },
    carImage: {
      mainImage: "/mock/audi.jpeg",
      images: [
        "/mock/audi-frontal.png",
        "/mock/audi-lateral.png",
        "/mock/audi-trasera.png",
      ],
    },
    carType: "suv",
    city: "Havana",
    color: "White",
    description:
      "Experience the thrill of driving a luxury SUV with the Audi Q5. This vehicle combines performance, comfort, and advanced technology to provide an unforgettable driving experience. Whether you're navigating city streets or exploring off-road trails, the Audi Q5 is designed to handle it all with style and confidence.",
    id: "1",
    kilometers: 25000,
    model: {
      id: "1",
      name: "Q5",
      carBrand: "audi",
    },
    ownerId: "1",
    pickupLocation: "123 Main St, Havana",
    powerType: "hybrid",
    price: 60,
    reservedDates: [],
    transmissionType: "automatic",
    year: 2020,
  },
  {
    brand: "BYD",
    caracteristics: {
      general: [
        "5 seats",
        "Air Conditioning",
        "Alloy Wheels",
        "Bluetooth",
      ],
      rules: ["No Smoking", "No Pets"],
      features: ["Insurance", "Roadside Assistance"],
    },
    carImage: {
      mainImage: "/mock/byd.jpeg",
      images: [
        "/mock/byd-frontal.png",
        "/mock/byd-lateral.png",
        "/mock/byd-trasera.png",
      ],
    },
    carType: "sedan",
    city: "Havana",
    color: "Gray",
    description:
      "Experience the thrill of driving a luxury sedan with the BYD Han. This vehicle combines performance, comfort, and advanced technology to provide an unforgettable driving experience.",
    id: "2",
    kilometers: 15000,
    model: {
      id: "2",
      name: "3 Series",
      carBrand: "byd",
    },
    ownerId: "2",
    pickupLocation: "456 Elm St, Havana",
    powerType: "electric",
    price: 70,
    reservedDates: [],
    transmissionType: "automatic",
    year: 2021,
  },
  {
    brand: "Porsche",
    caracteristics: {
      general: [
        "5 seats",
        "Air Conditioning",
        "Alloy Wheels",
        "Bluetooth",
      ],
      rules: ["No Smoking", "No Pets"],
      features: ["Insurance", "Roadside Assistance"],
    },
    carImage: {
      mainImage: "/mock/cayene.jpeg",
      images: [
        "/mock/cayene-frontal.png",
        "/mock/cayene-lateral.png",
        "/mock/cayene-trasera.png",
      ],
    },
    carType: "sports",
    city: "Havana",
    color: "Blue",
    description:
      "Experience the thrill of driving a reliable sedan with the Porsche Cayenne. This vehicle combines performance, comfort, and advanced technology to provide an unforgettable driving experience.",
    id: "3",
    kilometers: 30000,
    model: {
      id: "3",
      name: "Cayenne",
      carBrand: "porsche",
    },
    ownerId: "3",
    pickupLocation: "789 Oak St, Havana",
    powerType: "gasoline",
    price: 50,
    reservedDates: [],
    transmissionType: "manual",
    year: 2019,
  },
  {
    brand: "KIA",
    caracteristics: {
      general: [
        "5 seats",
        "Air Conditioning",
        "Alloy Wheels",
        "Bluetooth",
      ],
      rules: ["No Smoking", "No Pets"],
      features: ["Insurance", "Roadside Assistance"],
    },
    carImage: {
      mainImage: "/mock/cerato.jpeg",
      images: [
        "/mock/cerato-frontal.png",
        "/mock/cerato-lateral.png",
        "/mock/cerato-trasera.png",
      ],
    },
    carType: "sedan",
    city: "Havana",
    color: "Red",
    description:
      "Experience the thrill of driving a reliable sedan with the KIA Cerato. This vehicle combines performance, comfort, and advanced technology to provide an unforgettable driving experience.",
    id: "4",
    kilometers: 20000,
    model: {
      id: "4",
      name: "Cerato",
      carBrand: "kia",
    },
    ownerId: "4",
    pickupLocation: "321 Pine St, Havana",
    powerType: "gasoline",
    price: 55,
    reservedDates: [],
    transmissionType: "manual",
    year: 2022,
  },
  {
    brand: "Lada",
    caracteristics: {
      general: [
        "5 seats",
        "Air Conditioning",
        "Alloy Wheels",
        "Bluetooth",
      ],
      rules: ["No Smoking", "No Pets"],
      features: ["Insurance", "Roadside Assistance"],
    },
    carImage: {
      mainImage: "/mock/lada.jpeg",
      images: [
        "/mock/lada-frontal.png",
        "/mock/lada-lateral.png",
        "/mock/lada-trasera.png",
      ],
    },
    carType: "sedan",
    city: "Havana",
    color: "Black",
    description:
      "Experience the thrill of driving a reliable sedan with the Lada 1500. This vehicle combines performance, comfort, and advanced technology to provide an unforgettable driving experience.",
    id: "5",
    kilometers: 18000,
    model: {
      id: "5",
      name: "1500",
      carBrand: "lada",
    },
    ownerId: "5",
    pickupLocation: "654 Cedar St, Havana",
    powerType: "diesel",
    price: 65,
    reservedDates: [],
    transmissionType: "manual",
    year: 1990,
  },
  {
    brand: "Hyundai",
    caracteristics: {
      general: [
        "5 seats",
        "Air Conditioning",
        "Alloy Wheels",
        "Bluetooth",
      ],
      rules: ["No Smoking", "No Pets"],
      features: ["Insurance", "Roadside Assistance"],
    },
    carImage: {
      mainImage: "/mock/sf.jpeg",
      images: [
        "/mock/sf-frontal.png",
        "/mock/sf-lateral.png",
        "/mock/sf-trasera.png",
      ],
    },
    carType: "suv",
    city: "Havana",
    color: "Silver",
    description:
      "Experience the thrill of driving a reliable SUV with the Hyundai Santa Fe. This vehicle combines performance, comfort, and advanced technology to provide an unforgettable driving experience.",
    id: "6",
    kilometers: 22000,
    model: {
      id: "6",
      name: "Santa Fe",
      carBrand: "hyundai",
    },
    ownerId: "6",
    pickupLocation: "987 Maple St, Havana",
    powerType: "hybrid",
    price: 58,
    reservedDates: [],
    transmissionType: "automatic",
    year: 2018,
  },
  {
    brand: "Hyundai",
    caracteristics: {
      general: [
        "5 seats",
        "Air Conditioning",
        "Alloy Wheels",
        "Bluetooth",
      ],
      rules: ["No Smoking", "No Pets"],
      features: ["Insurance", "Roadside Assistance"],
    },
    carImage: {
      mainImage: "/mock/sonata.jpeg",
      images: [
        "/mock/sonata-frontal.png",
        "/mock/sonata-lateral.png",
        "/mock/sonata-trasera.png",
      ],
    },
    carType: "sedan",
    city: "Havana",
    color: "Blue",
    description:
      "Experience the thrill of driving a reliable sedan with the Hyundai Sonata. This vehicle combines performance, comfort, and advanced technology to provide an unforgettable driving experience.",
    id: "7",
    kilometers: 16000,
    model: {
      id: "7",
      name: "Sonata",
      carBrand: "hyundai",
    },
    ownerId: "7",
    pickupLocation: "159 Birch St, Havana",
    powerType: "gasoline",
    price: 52,
    reservedDates: [],
    transmissionType: "automatic",
    year: 2021,
  },
  {
    brand: "KIA",
    caracteristics: {
      general: [
        "5 seats",
        "Air Conditioning",
        "Alloy Wheels",
        "Bluetooth",
      ],
      rules: ["No Smoking", "No Pets"],
      features: ["Insurance", "Roadside Assistance"],
    },
    carImage: {
      mainImage: "/mock/stonic.jpeg",
      images: [
        "/mock/stonic-frontal.png",
        "/mock/stonic-lateral.png",
        "/mock/stonic-trasera.png",
      ],
    },
    carType: "suv",
    city: "Havana",
    color: "Green",
    description:
      "Experience the thrill of driving a reliable SUV with the KIA Stonic. This vehicle combines performance, comfort, and advanced technology to provide an unforgettable driving experience.",
    id: "8",
    kilometers: 14000,
    model: {
      id: "8",
      name: "Stonic",
      carBrand: "kia",
    },
    ownerId: "8",
    pickupLocation: "753 Willow St, Havana",
    powerType: "hybrid",
    price: 75,
    reservedDates: [],
    transmissionType: "automatic",
    year: 2022,
  },
  {
    brand: "Tesla",
    caracteristics: {
      general: [
        "5 seats",
        "Air Conditioning",
        "Alloy Wheels",
        "Bluetooth",
      ],
      rules: ["No Smoking", "No Pets"],
      features: ["Insurance", "Roadside Assistance"],
    },
    carImage: {
      mainImage: "/mock/tesla.jpeg",
      images: [
        "/mock/tesla-frontal.png",
        "/mock/tesla-lateral.png",
        "/mock/tesla-trasera.png",
      ],
    },
    carType: "sedan",
    city: "Havana",
    color: "White",
    description:
      "Experience the thrill of driving a reliable sedan with the Tesla Model 3. This vehicle combines performance, comfort, and advanced technology to provide an unforgettable driving experience.",
    id: "9",
    kilometers: 27000,
    model: {
      id: "9",
      name: "Model 3",
      carBrand: "tesla",
    },
    ownerId: "8",
    pickupLocation: "852 Spruce St, Havana",
    powerType: "electric",
    price: 68,
    reservedDates: [],
    transmissionType: "automatic",
    year: 2019,
  },
];

export const mockOwners = [
  {
    id: "1",
    name: "Carlos",
    lastName: "Padín",
    ci: "951234567",
    email: "carlos@example.com",
    phone: "+53 555-1234",
    address: "123 Main St, Havana",
    profileImage: "/mock/owners/carlos.jpg",
    rating: 4.8,
  },
  {
    id: "2",
    name: "Jessica",
    lastName: "Pompa",
    ci: "957654321",
    email: "jessica@example.com",
    phone: "+53 555-5678",
    address: "456 Elm St, Havana",
    profileImage: "/mock/owners/jessica.jpg",
    rating: 4.5,
  },
  {
    id: "3",
    name: "Luis",
    lastName: "Martínez",
    ci: "953216789",
    email: "luis@example.com",
    phone: "+53 555-9012",
    address: "789 Oak St, Havana",
    profileImage: "/mock/owners/luis.jpg",
    rating: 4.7,
  },
  {
    id: "4",
    name: "Sophia",
    lastName: "Dominguez",
    ci: "019876543",
    email: "sophia@example.com",
    phone: "+53 555-3456",
    address: "321 Pine St, Havana",
    profileImage: "/mock/owners/sophia.jpg",
    rating: 4.6,
  },
  {
    id: "5",
    name: "Mateo",
    lastName: "González",
    ci: "012345678",
    email: "mateo@example.com",
    phone: "+53 555-6789",
    address: "654 Cedar St, Havana",
    profileImage: "/mock/owners/mateo.jpg",
    rating: 4.5,
  },
  {
    id: "6",
    name: "Isabella",
    lastName: "Rodríguez",
    ci: "098765432",
    email: "isabella@example.com",
    phone: "+53 555-9012",
    address: "789 Oak St, Havana",
    profileImage: "/mock/owners/isabella.jpg",
    rating: 4.7,
  }, 
  {
    id: "7",
    name: "Daniel",
    lastName: "Fernández",
    ci: "023456789",
    email: "daniel@example.com",
    phone: "+53 555-3456",
    address: "321 Pine St, Havana",
    profileImage: "/mock/owners/daniel.jpg",
    rating: 4.6,
  },
  {
    id: "8",
    name: "Valentina",
    lastName: "Perez",
    ci: "087654321",
    email: "valentina@example.com",
    phone: "+53 555-7890",
    address: "987 Maple St, Havana",
    profileImage: "/mock/owners/valentina.jpg",
    rating: 5.0,
  },
];

export const createCarsTable = (db) => {
  db.prepare(
    `CREATE TABLE IF NOT EXISTS cars (
    id INTEGER PRIMARY KEY,
    brand TEXT NOT NULL,
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

export const seedCars = (db) => {
const insertCar = db.prepare(`
    INSERT OR REPLACE INTO cars (
      brand,
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
      @brand,
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
      brand: JSON.stringify(car.brand),
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

export const createOwnersTable = (db) => {
  db.prepare(
    `CREATE TABLE IF NOT EXISTS owners (
      id INTEGER PRIMARY KEY,
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

export const seedOwners = (db) => {
  const insertOwner = db.prepare(`
    INSERT OR REPLACE INTO owners (
      name, 
      lastName,
      ci, 
      email, 
      phone, 
      address, 
      profileImage, 
      rating
    ) VALUES (
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


export const createUsersTable = (db) => {
  db.prepare(
    `CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      lastName TEXT NOT NULL,
      ci TEXT NOT NULL UNIQUE,
      dateOfBirth TEXT NOT NULL,
      licence TEXT NOT NULL UNIQUE,
      phone TEXT NOT NULL,
      address1 TEXT NOT NULL,
      address2 TEXT,
      country TEXT NOT NULL,
      province TEXT NOT NULL,
      postalCode TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      profileImage TEXT NOT NULL,
      rating REAL NOT NULL DEFAULT 0,
      username TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    )`
  ).run();
};

// Create tables

createCarsTable(db);
createOwnersTable(db);
createUsersTable(db);

// Insert mock data
seedCars(db);
seedOwners(db);


console.log("DB created and seeded successfully.");

// lib/db.js - Versión mínima
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306, // ¡Aquí el fix!
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Dev_P@ss_21ST',
  database: process.env.DB_NAME || 'go_cuba'
});

export default pool;
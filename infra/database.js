import { Pool } from "pg";

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  database: process.env.POSTGRES_DB,
  ssl: true,
});

const query = async (queryObject) => {
  console.log({
    host: process.env.POSTGRES_HOST,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
  });
  try {
    const result = await pool.query(queryObject);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  query: query,
};

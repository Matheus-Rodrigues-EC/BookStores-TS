import pg from "pg";
import dotenv from "dotenv";
dotenv.config()

const { Pool } = pg;

// const connection = new Pool({
//     host: process.env.HOST,
//     port: Number(process.env.DB_PORT),
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE
// });

// export { connection };~

const connection = new Pool({
    connectionString: process.env.DATABASE_URL
})

console.log('DataBase is Connected...');

export { connection };

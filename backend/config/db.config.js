import mysql from "mysql2/promise";
import { config } from "./env.config.js";

export const pool = mysql.createPool({
  host: config.database.host,
  user: config.database.user,
  password: config.database.password,
  database: config.database.database,
  waitForConnections: true,
  connectionLimit: 10,
});

// pool.connect((err) => {
//   if (err) console.log("연결 실패함");
//   else console.log("연결 성공");
// });

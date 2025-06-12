import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './database.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/users', async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM users");
    res.json(rows);
  } catch (err) {
    res.status(500).send(err);
  } finally {
    if (conn) conn.end();
  }
});

app.listen(5000, () => console.log("Servidor corriendo en http://localhost:5000"));
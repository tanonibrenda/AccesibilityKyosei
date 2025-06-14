const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "auth-db848.hstgr.io", // ⚠️ Reemplaza aquí con el host correcto
  user: "u419252749_admin",
  password: "TU_CONTRASEÑA",
  database: "u419252749_alumnos",
  waitForConnections: true,
  connectionLimit: 10
});

module.exports = pool;
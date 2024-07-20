const { Pool } = require('pg');
const dotenv = require("dotenv").config();

const db_user = process.env.DB_USER;
const db_host = process.env.DB_HOST;
const db_port = process.env.DB_PORT;
const db_name = (process.env.NODE_ENV === "BUILD") ? process.env.DB_NAME : process.env.DB_TESTNAME;
const db_password = process.env.DB_PASSWORD;

const pool = new Pool({
  user: db_user,
  host: db_host,
  port: db_port,
  database: db_name,
  password: db_password
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to PostgreSQL:', err.stack);
  } else {
    console.log('Connected to PostgreSQL at', pool.options.host);
  }
});


module.exports = pool;
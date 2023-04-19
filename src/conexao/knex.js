require('dotenv').config()

const knex = require('knex')({
  client: process.env.CLIENT,
  connection: {
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE
  }
})


module.exports = knex
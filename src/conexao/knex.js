require('dotenv').config()

const knex = require('knex')({
    client: 'postgresql://postgres:mf8de6B9LpHFERLwfwWd@containers-us-west-53.railway.app:6490/railway',
    connection: {
      host : 'containers-us-west-53.railway.app',
      port : 6490,
      user : 'postgres',
      password : 'mf8de6B9LpHFERLwfwWd',
      database : 'railway'
    }
  })


  module.exports = knex
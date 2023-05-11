const knex = require('knex')({
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: '1234',
      database: 'SCHOOL',
      port: 5432 //Standard PostgreSQL port
    }
});
  
module.exports = knex;
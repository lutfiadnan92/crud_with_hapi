const pg = require('pg');
const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'jubelio',
    password: '120992',
    port: '5432'
});

module.exports = pool
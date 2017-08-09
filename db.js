const pg = require('pg');

const pool = new pg.Pool({
    user: 'postgres',
    password: 'khoapham',
    database: 'NODE1407',
    host: 'localhost',
    port: 5432,
    max: 20
});

pool.connect((err, client, done) => {
    if (err) return console.log(err.message);
    client.query('SELECT * FROM "Product"', (errQuery, result) => {
        if (errQuery) return console.log(errQuery.message);
        console.log(result.rows[0]);
        done(errQuery);
    });
});

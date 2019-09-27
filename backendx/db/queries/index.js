const pgp = require('pg-promise')({});

const db = pgp(process.env.DATABASE_URL || 'postgres://localhost/burrow');
// const db = pgp('postgres://localhost:5432/burrow');

module.exports = { db };

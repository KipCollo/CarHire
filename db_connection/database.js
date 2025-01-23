const postgres = require('postgres');

const db = postgres("postgres://postgres@localhost:5432/postgres");

console.log("db listening..")

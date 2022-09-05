require('env2')('.env');

const { Pool } = require('pg');

const { NODE_ENV, DATABASE_URL, DEV_DATABASE_URL, TEST_DATABASE_URL } = process.env;
let connectionString = "";
let ssl = false;
switch (NODE_ENV) {
    case "production":
        connectionString = DATABASE_URL;
        ssl = {
            rejectUnauthorized: false
        }
        break;

    case "dev":
        connectionString = DEV_DATABASE_URL;
        break;
    case "test":
        connectionString = TEST_DATABASE_URL;
        break;
    default:
        new Error("Database URL invalid");
}


const connection = new Pool({
    connectionString,
    ssl,
})

module.exports = connection;
const { connection, SQL, MONGO } = require("./database");

let initDatabase;

switch (connection) {

    case SQL:
        initDatabase = require("./sql/init"); break;
    case MONGO:
        initDatabase = require("./mongo/init"); break;
    default:
        throw `Must be specified DB_CONNECTION and only can be ${MYSQL} or ${MONGO}`;
}

module.exports = initDatabase;
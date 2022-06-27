const { connection, SQL, MONGO } = require("../config/database");

let userModel;

switch (connection) {

    case SQL:
        userModel = require("./sql/user"); break;
    case MONGO:
        userModel = require("./mongo/user"); break;
    default:
        throw `Must be specified DB_CONNECTION and only can be ${MYSQL} or ${MONGO}`;
}

module.exports = {
    userModel,
};
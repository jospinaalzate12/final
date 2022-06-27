
const sequelize = require("./connection")
require("../../models");//se traen los modelos para crear las tablas

const initConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection with mysql has been established successfully.');
        await sequelize.sync();//crea las tablas
        console.log("All models were synchronized successfully.");

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = initConnection;
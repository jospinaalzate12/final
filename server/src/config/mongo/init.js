
const initConnection = async () => {
    try {
        await require("./connection");
        console.log('Connection with mongo has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = initConnection;
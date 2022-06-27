const { Sequelize } = require('sequelize');

const { sql } = require("../database");
const options={
    
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false
          }
        
      }
    
}
const sequelize = new Sequelize(sql.uri,options);

module.exports = sequelize;
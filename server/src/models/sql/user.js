const { DataTypes } = require('sequelize');
const sequelize = require("../../config/sql/connection");

const User = sequelize.define('User', {
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    avatar: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'users'
});

console.log("Using Sequelize")

const customCreate = async (dataUser) => {
    return await User.create(dataUser);
}

const customUpdate = async (dataToFind, dataToUpdate) => {
    await User.update(dataToUpdate, { where: dataToFind });
}


const customFind = async (dataToFind)=>{
    //La opcion raw:true limpia el modelo de metodos y devuelve solo data, esto es util para trabajar con JWT
    const user = await User.findOne({ where: dataToFind,  raw: true });
    return user;
}



User.customCreate = customCreate;
User.customUpdate = customUpdate;
User.customFind = customFind;

module.exports = User;
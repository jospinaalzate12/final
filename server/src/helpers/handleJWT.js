const jwt = require('jsonwebtoken');

const {secretKey} = require("../config/config");

const getJSONWebToken = (userData)=>{

    return jwt.sign(userData, secretKey);

}

const verifyJSONWebToken = (token) =>{

    return jwt.verify(token, secretKey);

}

module.exports = {
    getJSONWebToken,
    verifyJSONWebToken
}


const mongoose = require('mongoose');
const { mongo } = require("../database");
const connectionString = mongo.uri;
module.exports = mongoose.connect(connectionString);
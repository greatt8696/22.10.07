const { Sequelize } = require("sequelize");
const Squelize = require("sequelize");

const { config } = require("../config/config");

const { database, username, pwd } = config.dev;

const sequelize = new Sequelize(database, username, pwd, config.dev);

const db = {};

db.sequelize = sequelize;

// User.init(sequelize)
// username.associate(db)j

module.exports = db;

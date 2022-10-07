const Sequelize = require("sequelize");

const { config } = require("../config/config");

const { database, username, pwd } = config.dev;

const User = require("./User");

const sequelize = new Sequelize(database, username, pwd, config.dev);

const db = {};

db.sequelize = sequelize;
db.user = User;

User.init(sequelize);
// username.associate(db)

module.exports = db;

const dot = require("dotenv").config;

const config = {
  dev: {
    username: "root",
    pwd: "1234",
    database: "test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};

module.exports = { config };

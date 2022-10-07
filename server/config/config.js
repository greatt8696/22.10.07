const dot = require("dotenv").config;

const config = {
  dev: {
    username: "root",
    pwd: process.env.DATABASE_PWD,
    database: "test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};

module.exports = { config };

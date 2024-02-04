require("dotenv").config();

const config = {
  MONGODB_PASS: process.env.MONGODB_PASS,
};

module.exports = config;

require("dotenv").config();

const config = {
  MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
  EXERCISES_RAPID_API_HOST: process.env.EXERCISES_RAPID_API_HOST,
  EXERCISES_RAPID_API_KEY: process.env.EXERCISES_RAPID_API_KEY,
};

module.exports = config;

const config = require("../../config");

const EXERCISES_RAPID_API_URL =
  "https://exercisedb.p.rapidapi.com/exercises?limit=10";
const EXERCISES_RAPID_API_OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": config.EXERCISES_RAPID_API_KEY,
    "X-RapidAPI-Host": config.EXERCISES_RAPID_API_HOST,
  },
};

module.exports = {
  EXERCISES_RAPID_API_URL,
  EXERCISES_RAPID_API_OPTIONS,
};

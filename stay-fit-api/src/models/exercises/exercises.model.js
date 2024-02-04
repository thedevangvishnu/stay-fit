const exercisesDatabase = require("./exercises.mongo");
const {
  EXERCISES_RAPID_API_URL,
  EXERCISES_RAPID_API_OPTIONS,
} = require("../../services/exercises.rapidApi");

// fetch exercises from API and store it in exercisesDatabase;

const loadExercisesData = async () => {
  try {
    const response = await fetch(
      EXERCISES_RAPID_API_URL,
      EXERCISES_RAPID_API_OPTIONS
    );
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  loadExercisesData,
};

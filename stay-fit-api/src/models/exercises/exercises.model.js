const exercisesDatabase = require("./exercises.mongo");
const {
  EXERCISES_RAPID_API_URL,
  EXERCISES_RAPID_API_OPTIONS,
} = require("../../services/exercises.rapidApi");

// fetch exercises from API and store it in exercisesDatabase;

const loadExercisesDataFromApi = async () => {
  try {
    const response = await fetch(
      EXERCISES_RAPID_API_URL,
      EXERCISES_RAPID_API_OPTIONS
    );
    const result = await response.json();

    result.forEach(async (item) => {
      await exercisesDatabase.updateOne(
        {
          id: item.id,
        },
        {
          id: item.id,
          name: item.name,
          bodyPart: item.bodyPart,
          target: item.target,
          equipment: item.equipment,
          gifUrl: item.gifUrl,
          secondaryMuscles: item.secondaryMuscles,
          instructions: item.instructions,
        },
        {
          upsert: true,
        }
      );
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  loadExercisesDataFromApi,
};

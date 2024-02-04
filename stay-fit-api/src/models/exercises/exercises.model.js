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

const getAllExercises = async () => {
  return await exercisesDatabase.find(
    {},
    {
      _id: 0,
      __v: 0,
    }
  );
};

const getBodyPartsList = async () => {
  return await exercisesDatabase.distinct("bodyPart");
};

const getTargetList = async () => {
  return await exercisesDatabase.distinct("target");
};

const checkExerciseExists = async (exerciseName) => {
  const exercise = exercisesDatabase.findOne({
    name: {
      $regex: new RegExp(exerciseName, "i"),
    },
  });

  return exercise ? true : false;
};

const getExerciseByName = async (exerciseName) => {
  const exercises = exercisesDatabase.find(
    {
      name: {
        $regex: new RegExp(exerciseName, "i"),
      },
    },
    {
      _id: 0,
      __v: 0,
    }
  );

  return exercises;
};

module.exports = {
  loadExercisesDataFromApi,
  getAllExercises,
  getBodyPartsList,
  getTargetList,
  checkExerciseExists,
  getExerciseByName,
};

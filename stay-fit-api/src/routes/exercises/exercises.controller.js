const {
  getAllExercises,
  getBodyPartsList,
  getTargetList,
  checkExerciseExists,
  getExerciseByName,
} = require("../../models/exercises/exercises.model");

const httpGetAllExercises = async (req, res) => {
  return res.status(200).json(await getAllExercises());
};

const httpGetBodyParts = async (req, res) => {
  return res.status(200).json(await getBodyPartsList());
};

const httpGetTargetList = async (req, res) => {
  return res.status(200).json(await getTargetList());
};

const httpGetExerciseByName = async (req, res) => {
  const name = req.params.name;

  if (!checkExerciseExists(name)) {
    return res.status(404).json({ error: "Not found" });
  }

  return res.status(200).json(await getExerciseByName(name));
};

module.exports = {
  httpGetAllExercises,
  httpGetBodyParts,
  httpGetTargetList,
  httpGetExerciseByName,
};

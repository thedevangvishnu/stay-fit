const express = require("express");
const {
  httpGetAllExercises,
  httpGetBodyParts,
  httpGetTargetList,
  httpGetExerciseByName,
} = require("./exercises.controller");

const exercisesRouter = express.Router();

/*
All routes:
    "/": get all exercises stored in mdb
    "/name": get all exercises stored in mdb
    "/bodyPartList": 
    "/bodyParts": get all exercises matching bodyParts or target
    "/"
*/

exercisesRouter.get("/", httpGetAllExercises);

exercisesRouter.get("/bodyParts", httpGetBodyParts);

exercisesRouter.get("/targetList", httpGetTargetList);

exercisesRouter.get("/:name", httpGetExerciseByName);

module.exports = { exercisesRouter };

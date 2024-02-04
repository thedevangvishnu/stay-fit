const express = require("express");
const { exercisesRouter } = require("./routes/exercises/exercises.routes");

const app = express();

app.use(express.json());

app.use("/exercises", exercisesRouter);

module.exports = { app };

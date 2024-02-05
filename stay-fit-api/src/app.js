const express = require("express");
const cors = require("cors");
const { exercisesRouter } = require("./routes/exercises/exercises.routes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

app.use("/exercises", exercisesRouter);

module.exports = { app };

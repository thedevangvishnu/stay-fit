const http = require("http");
const { app } = require("./app");
const { connectToMongoDB } = require("./services/mongo");
const { loadExercisesData } = require("./models/exercises/exercises.model");

const server = http.createServer(app);
const PORT = process.env.PORT || 8000;

const startServer = async () => {
  await connectToMongoDB();
  await loadExercisesData();

  server.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}...`);
  });
};

startServer();

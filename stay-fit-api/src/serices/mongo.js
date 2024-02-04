const mongoose = require("mongoose");
const config = require("../../config");

mongoose.connection.once("open", () => {
  console.log("MongoDB connection successfull");
});

mongoose.connect.on("error", () => {
  throw new Error("Error connencting to MongoDB");
});

const connectToMongoDB = async () => {
  await mongoose.connect(
    `mongodb+srv://dv080499:${config.MONGODB_PASS}@cluster0.vjkszou.mongodb.net/StayFit`
  );
};

const disconnectToMongoDB = async () => {
  await mongoose.disconnect();
};

module.exports = {
  connectToMongoDB,
  disconnectToMongoDB,
};

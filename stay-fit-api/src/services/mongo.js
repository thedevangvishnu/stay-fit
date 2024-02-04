const mongoose = require("mongoose");
const config = require("../../config");

mongoose.connection.once("open", () => {
  console.log("MongoDB connection successfull");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
  throw new Error("Error connencting to MongoDB");
});

const connectToMongoDB = async () => {
  await mongoose.connect(
    `mongodb+srv://dv080499:${config.MONGODB_PASSWORD}@cluster0.vjkszou.mongodb.net/StayFit`
  );
};

const disconnectToMongoDB = async () => {
  await mongoose.disconnect();
};

module.exports = {
  connectToMongoDB,
  disconnectToMongoDB,
};

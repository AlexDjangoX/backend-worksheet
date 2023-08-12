const mongoose = require("mongoose");

// Function to establish Mongoose connection
const connectToDatabase = async () => {
  try {
    const connectionString = process.env.MONGODB_URI;

    if (!connectionString) {
      throw new Error("MONGODB_URI environment variable is not defined.");
    }

    mongoose.set("strictQuery", true);
    await mongoose.connect(connectionString, {
      dbName: "expressjs",
    });

    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
};

module.exports = connectToDatabase;

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/codsoft";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

  async function main() {
    try {
      await mongoose.connect(MONGO_URL);
      console.log("Connected to MongoDB");
  
      // Call your initialization function here
      await initDB();
  
      // Other code or server startup logic can go here
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  }
  

  const initDB = async () => {
    try {
      await Listing.deleteMany({});
      initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "6565e83d6401ad92b537f58f", // Hardcoded owner ID
      }));

      await Listing.insertMany(initData.data);
  
      console.log("Data was initialized");
    } catch (error) {
      console.error("Error initializing data:", error);
    }
  };
  

initDB();

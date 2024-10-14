import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config();

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERRR : ", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("Mongo db Connection failed !!! ", err);
  });

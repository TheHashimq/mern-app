import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

const connectDB = async () => {
  try {
    const FULL_DB_NAME = process.env.MONGODB_URI + DB_NAME;
    console.log(FULL_DB_NAME);
    const connectionInstance = await mongoose.connect(FULL_DB_NAME);
    console.log(`\n MongoDB Connected !! DB Host :
      ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MONGODB Connection Error ", error);
    process.exit(1);
  }
};
export default connectDB;

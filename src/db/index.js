import mongoose from "mongoose";
import {DB_NAME} from "../constants.js" // DataBase Name Only

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`mongodb://127.0.0.1/27017/${DB_NAME}`);
    console.log(`\n Mongo DB connected !! DB HOST ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("Mongo DB connection Failed", error);
    process.exit(1);
  }
};

export default connectDB;
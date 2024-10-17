import mongoose from "mongoose";
const connection = {};
export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using Existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGODB_URI);
    connection.isConnected = db.connections[0].readyState;
    console.log("db ---", db)
  } catch (error) {
    throw new Error(error);
  }
};
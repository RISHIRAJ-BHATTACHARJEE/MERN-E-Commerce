import mongoose from "mongoose";

export const connectDB = () => {
  try {
    mongoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log("MongoDB Connected"))
      .catch((err) => console.log("Connection failed", err));
  } catch (error) {
    console.log("error", error);
    process.exit(1)
  }
};

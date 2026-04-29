import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log(">> DB Connected <<");
  } catch (error) {
    console.error("Error al conectar a DB", error);
    process.exit(1);
  }
};

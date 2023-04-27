import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
  try {    
    const conn = await mongoose.connect(`mongodb://${process.env.MONGO_DB_HOST}:${process.env.MONGO_DB_PORT}/blog`, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.log(`Error: ${err.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
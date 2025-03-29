import mongoose from "mongoose";
import {configDotenv} from "dotenv";
import Book from "../models/book.js";
import bookData from "./data.js";

configDotenv({path:"../.env"});
const MONGO_URI=process.env.MONGO_URI;

main()
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ Connection Error:", err));

async function main() {
  await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
}

const initBook = async () => {
    try {
      await Book.deleteMany({});
      console.log("🗑️ Cleared existing books data");
  
      await Book.insertMany(bookData.data);
      console.log("✅ Books data initialized successfully!");
  
      mongoose.connection.close();
    } catch (error) {
      console.error("❌ Error initializing DB:", error);
    }
};

initBook();
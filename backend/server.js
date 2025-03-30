import express from "express";
import mongoose from "mongoose";
import {configDotenv} from "dotenv";
import cors from "cors";

configDotenv({path:"./.env"});

const app=express();
const PORT=process.env.PORT || 3000;

//cors
app.use(
    cors({
      origin: [
        "http://localhost:5173"
        
      ],
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
    })
);

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("MongoDB Connected");
    } catch (error) {
      console.error(`MongoDB connection failed: ${error.message}`); 
    }
};

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


//importing the routes
import authRoutes from "./routes/auth.route.js";
import bookRoutes from "./routes/book.route.js";
import searchRoutes from "./routes/search.route.js";
import reviewRoutes from "./routes/review.route.js";


app.use("/user",authRoutes);
app.use("/book",bookRoutes);
app.use("/book",searchRoutes);
app.use("/book",reviewRoutes);

app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
})
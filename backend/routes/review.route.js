import express from "express";
import { addReview } from "../controllers/review.controller.js";
import { authenticateToken } from "../middleware/middleware.js";
const router=express.Router();

router.post("/getAll/:id/addReview",authenticateToken,addReview);

export default router;
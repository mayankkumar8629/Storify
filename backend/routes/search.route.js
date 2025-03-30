import express from "express";
import { search,sortByPrice } from "../controllers/search.controller.js";
import { authenticateToken } from "../middleware/middleware.js";

const router=express.Router();

router.get("/search",authenticateToken,search);
router.get("/search/sortByPrice",authenticateToken,sortByPrice);


export default router;
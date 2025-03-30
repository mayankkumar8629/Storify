import express from "express";
import { getAllBooks ,getBookById,updateBookById,deleteById,createNewBook} from "../controllers/book.controller.js";
import { authenticateToken } from "../middleware/middleware.js";

const router=express.Router();

router.get("/getAll",authenticateToken,getAllBooks);
router.get("/getAll/:id",authenticateToken,getBookById);
router.put("/getAll/:id/update",authenticateToken,updateBookById);
router.delete("/getAll/:id/delete",authenticateToken,deleteById);
router.post("/createNew",authenticateToken,createNewBook);

export default router;
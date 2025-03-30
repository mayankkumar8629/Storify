import express from "express";
import { getAllBooks ,getBookById,updateBookById,deleteById,createNewBook} from "../controllers/book.controller.js";

const router=express.Router();

router.get("/getAll",getAllBooks);
router.get("/getAll/:id",getBookById);
router.put("/getAll/:id/update",updateBookById);
router.delete("/getAll/:id/delete",deleteById);
router.post("/createNew",createNewBook);

export default router;
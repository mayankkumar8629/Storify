import User from "../models/user.js";
import Book from "../models/book.js";

export const getAllBooks = async(req,res)=>{

    try{
        const books=await Book.find();
        return res.status(200).json(books);
    }catch(error){
        console.error("Error in retrieving books",error.message);
        res.status(500).json({message:"Error in getting books",error});
    }
}
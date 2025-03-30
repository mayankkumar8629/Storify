import User from "../models/user.js";
import Book from "../models/book.js";
import Review from "../models/review.js";

export const addReview = async(req,res)=>{
    try{
        if(!req.user){
            res.status(401).json({message:"User not authenicated"});
        }
        const {id}=req.params;
        const {rating,review}=req.body;
        const userId=req.user.id;
    
        const newReview = new Review({
            user:userId,
            rating,
            review
        });
        const savedReview= await newReview.save();
        const updatedBookDetails = await Book.findByIdAndUpdate(
            id,
            {$push:{review:savedReview._id}},
            {new:true}
        );
    
        if(!updatedBookDetails){
            return res.status(404).json({message:"Book not found"});
        }
        return res.status(201).json({
            message:"Review added successfully",
            review:savedReview,
            book:updatedBookDetails
        });
    }catch(error){
        return res.status(500).json({message:error.message});
    }

}
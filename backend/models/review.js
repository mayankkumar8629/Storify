import mongoose from "mongoose";
const {Schema}=mongoose;

const reviewSchema=new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    rating:{
        type:Number,
        default:0
    },
    review:{
        type:String
    }
});

const Review = mongoose.model("Review",reviewSchema);
export default Review;
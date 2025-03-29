import mongoose from "mongoose";
const {Schema}=mongoose;

const bookSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    authors:[
        {
            type:String,
            required:true
        }
    ],
    price:{
        type:Number,
        required:true
    },
    imageUrl:{
        type:String
    },
    publicationDate:{
        type:Date
    },
    stock:{
        type:Number,
        default:0
    },
    review:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review"
        }
    ],
    categories:[
        {
            type:String,
            required:true
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now,
    }

})

const Book = mongoose.model("Book",bookSchema);
export default Book;
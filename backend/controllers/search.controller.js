import Review from "../models/review.js";
import Book from "../models/book.js";

export const search = async(req,res)=>{
    try{
        const {author,category,title,rating}=req.query;
    
        const matchStage = {};
        if(author) matchStage.authors=author;

        if (category) {
            const categoriesArray = Array.isArray(category)
              ? category
              : category.split(',').map(cat => cat.trim());
            matchStage.categories = { $in: categoriesArray };
        }
        if(title) matchStage.title = {$regex:title,$options:'i'};

        const pipeline = [
            {$match : matchStage},
            {
                $lookup:{
                    from: 'reviews',
                    localField:'reivew',
                    foreignField:'_id',
                    as:'reviewsData'
                }
            }
        ];

        if(rating){
            pipeline.push({
                $match:{
                    reviewsData:{ $elemMatch:{rating:{$gte:Number(rating)}}}
                }
            });
        }
        const books = await Book.aggregate(pipeline);
        res.status(200).json({data:books});

    }catch(error){
        res.status(500).json({message:error.message});
    }
}

export const sortByPrice = async(req,res)=>{
    try{
        const order = req.query.order === 'desc'? -1 : 1;

        const books = await Book.find({}).sort({price:order});
        res.status(200).json({data:books});
    }catch(error){
        res.status(500).json({message:error.message});
    }
}


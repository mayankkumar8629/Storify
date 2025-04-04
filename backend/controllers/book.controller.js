import User from "../models/user.js";
import Book from "../models/book.js";

export const getAllBooks = async(req,res)=>{

   try{
    const {page,limit}=req.query;
    
    let books,total;

    if(!page && !limit){
        books = await Book.find({});
        total=books.length;
        return res.status(200).json({
            data:books,
            total,
            message:"All books returned(no pagenation query)"
        });
    }else{
        const pageNumber= parseInt(page,10) || 1;
        const limitNumber = parseInt(limit,10) || 10;
        const skip = (pageNumber - 1 ) * limitNumber;

        books= await Book.find({}).skip(skip).limit(limitNumber);
        total = await Book.countDocuments({});

        return res.status(200).json({
            data:books,
            total,
            page:pageNumber
        });
    }

   }catch(error){
        res.status(500).json({message:error.message});
   }
}

export const getBookById = async(req,res)=>{
    try{
        const {id}=req.params;
        const book=await Book.findById(id).populate("review");
        if(!book){
            res.status(404).json({message:"Book does not exists"});
        }
        res.status(200).json(book);
    }catch(error){
        res.status(500).json({message:"Error in finding book",error});
    }
}

//update by id
export const updateBookById = async(req,res)=>{
    try{
        const {
            title,
            description,
            authors,
            price,
            imageUrl,
            stock,
            categories
        }=req.body;
        
        const updatedData = {};
        const {id} = req.params;
        if(title!==undefined) updatedData.title=title;
        if(description!==undefined) updatedData.description=description;
        if(authors!==undefined)updatedData.authors=authors;
        if(price!==undefined)updatedData.price=price;
        if(imageUrl!==undefined)updatedData.imageUrl=imageUrl;
        if(stock!==undefined)updatedData.stock=stock;
        if(categories!==undefined)updatedData.categories=categories;

        const updatedBook = await Book.findByIdAndUpdate(
            id,
            updatedData,
            {new:true}
        );
        if(!updatedBook){
            res.status(404).json({message:"Cannot find Book"});
        }
        res.status(200).json({
            message:"Book updated succesfuly",
            data:updatedBook
        });

        
    }catch(error){
        res.status(500).json({message:"Error updating book"});
    }
}

//delete by id
export const deleteById = async (req,res)=>{
    try{
        const {id}=req.params;
        const deletedBook= await Book.findByIdAndDelete(id);
        if(!deletedBook){
            return res.status(404).json({message:"Book not found"});
        }
        res.status(200).json({message:"Book delete successfully"});
    }catch(error){
        res.status(500).json({message:"Error in deleting book",error});
    }
};
//creating a new book
export const createNewBook = async(req,res)=>{
    try{
        const{
            title,
            description,
            authors,
            price,
            imageUrl,
            publicationDate,
            stock,
            categories
        }= req.body;
        //creating new book
        const newBook = new Book({
            title,
            description,
            authors,
            price,
            imageUrl,
            publicationDate,
            stock,
            categories
        });
        await newBook.save();
        res.status(201).json({messge:"Book added successfully",newBook});

    }catch(error){
        res.status(500).json({messge:"eror adding new book entry",error});
    }
};

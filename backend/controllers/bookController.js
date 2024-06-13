const Book=require("../models/bookModel");

const getAllBooks = async (req,res,next)=>{
    let books;
    try {
        books= await Book.find()
    } catch (err) {
        console.log(err);
        
    }
    if(!books){
         return res.status(404).json({message:"no products found "})
    }
     return res.status(200).json({books})       
}

const getbyId= async(req,res,next)=>{
    const id=req.params.id
    let book;
    try {
        
        book= await Book.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!book){
        return res.status(404).json({message:"not found book "})
    }
    return res.status(200).json({book});

   
}

const addBook= async(req,res,next)=>{
    const {name,author,description,price,available,image}=req.body;
    let book;
    try {
        book= new Book({
            name,
            author,
            description,
            price,
            available,
            image
        })
        await book.save()
    } catch (error) {
        console.log(error)
    }

    if(!book){
        return res.staus(500).json({message:"unable to add" })
    }

    return res.status(201).json({book});
}

const updateBook= async(req,res,next)=> {
    const id=req.params.id;
    const {name,author,description,price,available,image}=req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id,{
        name,
        author,
        description,
        price,
        available,
        image
    })
    book = await book.save()
  } catch (error) {
    console.log(error)
  }
  if(!book){
    return res.status(404).json({message:"unable to update by this ID " })
}

return res.status(200).json({book});
}

 const deleteBook = async (req, res, next) => {
    const id = req.params.id;
    let book;

    try {
        // Use `findByIdAndRemove` to find a document by ID and remove it
        book = await Book.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    }

    if (!book) {
        return res.status(404).json({ message: "Unable to delete by this ID" });
    }

    return res.status(200).json({ message: "Book deleted successfully" });
};


exports.updateBook=updateBook;
exports.getbyId=getbyId;
exports.getAllBooks=getAllBooks;
exports.addBook=addBook;
exports.deleteBook=deleteBook;










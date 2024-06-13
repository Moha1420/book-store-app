const express=require("express");
const router=express.Router();
const Book=require("../models/bookModel");
const booksController=require("../controllers/bookController");





router.get('/',booksController.getAllBooks );
router.post('/',booksController.addBook);
router.get('/:id',booksController.getbyId);
router.put('/:id',booksController.updateBook);
router.delete('/:id',booksController.deleteBook);


module.exports=router;

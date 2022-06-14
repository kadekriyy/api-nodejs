require("dotenv").config(); 
const mongoose = require('mongoose');

const { urlencoded } = require('body-parser')
const express = require('express')
const router = express.Router()
router.use(express.json()) //for parsing aplication json
router.use(urlencoded({extended : true}))

mongoose.connect(
    process.env.MONGODB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

// define schema
const bookSchema = new mongoose.Schema({
    isbn : Number,
    title : String,
    author : String
});

// define model
const Book = mongoose.model('Book', bookSchema)

// add document
const bookDoc = new Book({
    isbn: 123456,
    title: "the power of sleep",
    author: 'putra'
});

bookDoc.save().then(()=>console.log("one entry added"))

router.route('/books')
    .get((req, res, next)=>{
        Book.find({}, (err, found) => {
            if (!err) {
                res.send(found);
            }else{
                console.log(err);
                res.send("Some error occured!")
            }
        })
    });

module.exports = router


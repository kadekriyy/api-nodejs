var express = require('express');
var app = express();
const port = 3000

const cars = require('./car')
const users = require('./user')
const books = require('./library/model-books')

app.use('/cars', cars)
app.use('/users', users)
app.use('/library', books)

app.listen(port, ()=>{
    console.log(`app listen on port ${port}`)
})
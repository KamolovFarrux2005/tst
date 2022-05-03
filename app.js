const express = require("express");

const app = express();
const mongoose = require("mongoose");
app.use(express.json())
app.use(express.urlencoded({extended: true}));
mongoose.connect("mongodb+srv://fifo:fifo@cluster0.tjvzz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use('/', require("./routes/product"));
app.use('/category', require('./routes/category'))



app.listen(3000, ()=>{
    console.log(3000)
})
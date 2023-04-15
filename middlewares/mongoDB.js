const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://paradise:3HGjwlF368ab@cluster0.anppu8q.mongodb.net/LIBRARY?retryWrites=true&w=majority' ,{
    useNewUrlParser : true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('mongodb connected successfully!!!')
}).catch((error)=>{
    console.log(error.message)
})
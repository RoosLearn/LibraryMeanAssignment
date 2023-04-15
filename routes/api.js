const express = require('express')
const router =  express.Router()
const DATA = require('../models/read')


//get books full list
router.get('/api/bookslist', async(req,res)=>{
 try {
    const list = await DATA.find()
    res.send(list)
 } catch (error) {
    console.log(error);
 }
})
 
//book add
router.post('/api/book', async(req,res)=>{
    try {

    let item = {
        name :req.body.name,
        author :req.body.author,
        year :req.body.year,
        about :req.body.about
    }
    const newBook = new DATA(item)
    const saveBook = await newBook.save()

    res.send(saveBook)

    } catch (error) {
       console.log(error);
    }
})

//book delete
router.delete('/api/book/:id', async(req,res)=>{

    try {
    let id = req.params.id;

    const deleteBook = await DATA.findByIdAndDelete(id)
    res.send(deleteBook)
    } catch (error) {
       console.log(error)
    }
})

//book update
// router.put('/book', async(req,res)=>{
//     try {

//     let id = req.body.id
//     let item = {
//         name : req.body.name,
//         author : req.body.author,
//         year : req.body.year,
//         about : req.body.about
//     }

//     let updateData = {$set : item}

//     let updateBook = await DATA.findByIdAndUpdate({'id': id }, updateData)

//     res.send(updateBook);

// } catch (error) {
//        console.log(error);
//     }
// })

router.put('/api/book/:id', async(req,res) => {

    try {
        
        let id = req.params.id
        console.log(id);
        let updateData = req.body
        let updateBook = await DATA.findByIdAndUpdate({_id:id}, {$set:updateData})
        res.send(updateBook)

    } catch (error) {
        console.log(error);
    }
})

//get one book

router.get('/book/:id', async(req,res)=>{
    try {
    
let id = req.params.id
const singleBook = await DATA.findById(id)
res.send(singleBook)

    } catch (error) {
       console.log(error);
    }
})







module.exports = router;
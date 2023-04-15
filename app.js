const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = 3000;
const app = new express()

require('./middlewares/mongoDB')


app.use(cors())
app.use(express.json()) 
app.use(express.urlencoded({extended:true}))
app.use(logger('dev'))

//api
const api = require('./routes/api');
app.use('/api', api)





//hosting
const path = require('path');
app.use(express.static('./dist/mylibrary/'))
app.get('/*', function(req,res) {res.sendFile(path.join(__dirname + '/dist/mylibrary/index.html'))})



//Server code
app.listen(PORT, () => {
    console.log(`....Server running at ${PORT}....`)
})
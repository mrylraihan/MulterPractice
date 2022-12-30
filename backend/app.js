const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')





mongoose.connect('mongodb://localhost/image-crud1')

const app = express()



app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
const imageController = require('./routers/image_controller')
app.use('/image', imageController)
app.get('/', (req, res) => {
    res.send('hey lets get started!')
})

// error handler

// start app
app.listen(4000, () => console.log('Example app listening on port 4000!'))
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/image-crud1')
const image = require('../models/image')

const deleteData = ()=>{
    image.deleteMany({})
    .then(()=>console.log('all done'))
    .then(()=>process.exit())
    .catch(console.error)
}

deleteData()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser');


const fs = require('fs');
const path = require('path');


mongoose.connect('mongodb://localhost/image-crud1')

const app = express()
const Image = require('./models/image')
// middleware requests
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({ storage: storage });

app.get('/', (req, res) => {
    res.send('hey lets get started!')
})
app.get('/image', (req, res) => {
    Image.find()
    .then(results=>res.json(results))
    .catch(err=>res.json(err))
})
app.post('/image', upload.single('image'),(req, res, next) => {

    const obj = {
        title : req.body.title,
       
        // image: {
        //     data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
        //     contentType: 'image/png'
        // }
        image: req.file.filename //will return the file path if we swap the model to string
    }
    Image.create(obj)
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
    ;
})
// error handler

// start app
app.listen(4000, () => console.log('Example app listening on port 4000!'))
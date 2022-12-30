const express = require('express')
const router = express.Router({mergeParams:true})

const Image = require('../models/image')


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

router.get('/', (req, res) => {
    Image.find()
        .then(results => res.json(results))
        .catch(err => res.json(err))
})
router.post('/', upload.single('image'), (req, res, next) => {

    const obj = {
        title: req.body.title,
        path: req.file.path,
        image: {
            data: req.file.filename,
            contentType: 'image/jpeg'
        }
        // image: {
        //     data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
        //     contentType: 'image/png'
        // }
        // image: req.file.filename //will return the file path if we swap the model to string
    }
    Image.create(obj)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

module.exports = router
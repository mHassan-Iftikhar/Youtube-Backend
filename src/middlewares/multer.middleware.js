import multer from "multer";

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '/tmp/my_uploads')
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + '-'+ Math.round(Math.random() * 1E9)
        cb(null, file.filename + '-' + uniqueSuffix)
    }
})

const upload = multer({storage: storage})
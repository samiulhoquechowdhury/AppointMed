import multer from "multer"

const storage = multer.diskStorage({
    filename: function(req,res, callback)
})
import multer from 'multer';
import fs from 'fs';
import { extname } from 'path';

const upload = multer({
    storage: multer.diskStorage({
        destination: function(req,file,cb){
            console.log(req,'ggggggggg')
            const path = `public/uploads/${file.fieldname}`
            fs.mkdirSync(path, { recursive: true })
            cb(null,path)
        },
        filename: function(req,file,cb){
           cb(null, `${Date.now()} - ${file.originalname}`)
        }
    })
})

export default upload
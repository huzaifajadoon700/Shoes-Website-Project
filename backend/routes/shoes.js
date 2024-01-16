import  express  from 'express';
import multer from "multer";
import { addshoe, deleteProduct, viewproducts } from '../controllers/shoes.js';
import { authorizetoken } from '../middleware/middleware.js';
const router =express.Router();

const storage= multer.diskStorage({
    destination:function(req,file, cb){
        cb(null, './Images/');
    },
    filename:function(req, file, cb){
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload= multer({storage: storage,limits: { fileSize: 5 * 1024 * 1024 },});

router.get("/",authorizetoken,viewproducts);
router.post("/",authorizetoken,upload.single('productImage'), addshoe);
router.delete("/:productId",authorizetoken, deleteProduct); 

export default router;
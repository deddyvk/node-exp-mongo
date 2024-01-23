import express from "express";
import {getProduct,saveProduct,getDetailProduct,updateProduct,deleteProduct} from "../controllers/productController.js"

const router = express.Router();

router.get('/',getProduct);
router.get('/:id',getDetailProduct);
router.post('/',saveProduct);
router.patch('/:id',updateProduct);
router.delete('/:id',deleteProduct);

export default router
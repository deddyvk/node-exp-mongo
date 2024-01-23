import productModel from "../models/productModel.js";

export const getProduct = async (req,res)=>{
    try {
        const dataproducts = await productModel.find();
        res.json({message:"Tampilkan semua data produk", data:dataproducts});
        
    } catch (error) {
        res.status(500).json({message:'Tidak dapat tampilkan data produk', error:error.message});
    }
}

export const saveProduct = async (req,res)=>{
    const {title, price} = req.body;
    const product = new productModel({title:title, price:price});console.log(`product : ${product}`);
    try {
        await product.save();
        res.status(201).json({message:"Simpan data produk", data:product});
        
    } catch (error) {
        res.status(500).json({message:'Tidak dapat simpan data produk', error:error.message});
    }
}

export const getDetailProduct = async (req,res)=>{
    try {
        const {id} = req.params;
        const detailproduct = await productModel.findOne({_id:id});
        res.json({message:"Tampilkan detail produk", data:detailproduct});
        
    } catch (error) {
        res.status(500).json({message:'Tidak dapat tampilkan detail produk', error:error.message});
    }
}

export const updateProduct = async (req,res)=>{
    try {
        const {id} = req.params;
        const updateproduct = await productModel.updateOne({_id:id},{$set:req.body});
        res.json({message:"Update data produk", data:updateproduct});
        
    } catch (error) {
        res.status(500).json({message:'Tidak dapat update data produk', error:error.message});
    }
}

export const deleteProduct = async (req,res)=>{
    try {
        const {id} = req.params;
        await productModel.findByIdAndDelete({_id:id});
        res.json({message:"Hapus data produk berhasil"});
        
    } catch (error) {
        res.status(500).json({message:'Tidak dapat hapus data produk', error:error.message});
    }
}
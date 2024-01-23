import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import productRouter from "./app/routes/productRouter.js";

dotenv.config();
const port =  process.env.PORT || 3000;

mongoose.connect("mongodb://0.0.0.0:27017/restfull_db");
const db = mongoose.connection;
db.on('error',(error)=> console.log(error));
db.once('open', ()=> console.log('Database connected'));

const app = express();

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    console.log({message:'Halaman Awal'});
});

app.use('/product',productRouter);


app.listen(port,()=>{
    console.log(`Server listen on port ${port}`);
});
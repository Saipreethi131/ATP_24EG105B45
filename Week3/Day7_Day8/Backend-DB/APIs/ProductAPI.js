import exp from 'express'
import {productModel} from "../models/ProductModel.js"
export const productapp=exp.Router()

//REST API with below operations
    //**** CREATE PRODUCT ****
    productapp.post("/products",async(req,res)=>
    {
        //get product body from req
        const newproduct =req.body
        const newproductdocument =new productModel(newproduct);
        //save
        const result = await newproductdocument.save()
        console.log("result:",result)
        res.status(201).json({message:"product created"})
    })

    // **** READ ALL PRODUCTS *****
    productapp.get("/products",async (req,res)=>{
   //here since UserModel represents collection we call the find method on it
    let allproduct =await productModel.find();
    //send res
    res.status(200).json({message:"products",payload:allproduct})
    })

    // ***** READ A PRODUCT BY ID AND FIND ********
    productapp.get("/products/:pid",async (req,res)=>{
    let ID =req.params.pid;
    let productobj =await productModel.findOne({productId:ID});
    //send res
    res.status(200).json({message:"product",payload:productobj})
    })

    // ***** UPDATE A PRODUCT BY PRODUCTID *****
    productapp.put("/products/:pid",async(req,res)=>{
        let ID=req.params.pid
        let modifiedproduct =req.body
        let result =await productModel.updateOne({productId:ID},
            {$set:modifiedproduct},{new:true,runValidators:true});
        res.status(200).json({message:"product updated"})
    })
    
    // ***** DELETE A PRODUCT BY PRODUCTID *****
     productapp.delete("/products/:pid",async(req,res)=>{
        let ID=req.params.pid
        let result =await productModel.deleteOne({productId:ID})
        res.status(200).json({message:"product deleted"})
     })
     
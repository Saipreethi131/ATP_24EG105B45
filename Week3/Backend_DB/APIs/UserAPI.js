//create mini-express app(separate route)
import exp from 'express'
import {UserModel} from '../models/UserModel.js'
import {hash,compare}from "bcrypt"
import jwt from 'jsonwebtoken'
import {verifytoken} from '../middlewares/verifyToken.js'
import {config}from 'dotenv'
config();
const{sign}=jwt; //sign-encoding
export const userapp =exp.Router()
//mini express applications dont have the http server but a special route 

 //*****CREATE NEW USER ******* 
 userapp.post("/users",async(req,res)=>{
//get new user obj from req
const newUser=req.body;
//HASHING the password 
const hashedpassword =await hash(newUser.password,10)
/*here the 2nd argument 10 is the cost factor(no of times it is hashed)*/
//replace the normal password with hashed password
newUser.password=hashedpassword;
  //create newuser document
    const newUserDocument =new UserModel(newUser)
    //save
    const result=await newUserDocument.save();
    console.log("result:",result)
    //send res
    res.status(201).json({message:"user created"});
 })


 //******READ ALL USERS (protected route)**
 userapp.get("/users",verifytoken,async (req,res)=>{
//here since UserModel represents collection we call the find method on it
    let userslist =await UserModel.find();
    //send res
    res.status(200).json({message:"users",payload:userslist})
 })


 //***** READ USER (only logged in user) ****
 userapp.get("/user",verifytoken,async(req,res)=>{
    //read usser email from req
    const emailOfUser =req.user?.email;
    // console.log(emailOfUser)
    //find user by id
    const userobj=await UserModel.findOne({email:emailOfUser}).populate("cart.product");
    //populate will go to products collection and gets details by id
    //returns null if resourse not found
    //send res
    if(userobj===null)
    {
       return res.status(404).json({message:"user not found"})
    }
      res.status(200).json({message:"user",payload:userobj})
 })

 
 //****** UPDATE USER BY ID *******
 userapp.put("/users/:id",verifytoken,async(req,res)=>{
    //get modified user from req
    const modifieduser = req.body;
    const uid=req.params.id;
    const updateduser= await UserModel.findByIdAndUpdate(uid,
    {$set:{ ...modifieduser}},{new:true,runValidators:true});
    if(!updateduser){
  return res.status(404).json({message:"User not found"})
   }
res.status(200).json({message:"updated user",payload:updateduser})
 })

//******DELETE USER BY ID *********
userapp.delete("/users/:id",async(req,res)=>{
    let uid=req.params.id;
    let deleteduser=await UserModel.findByIdAndDelete(uid)
if(!deleteduser){
  return res.status(404).json({message:"User not found"})
   }
res.status(200).json({message:"user removed",payload:deleteduser})
})

// ******** USER LOGIN ***********
userapp.post("/auth",async(req,res)=>{
   //get user cred obj from client
   const {email,password}=req.body;
   //verify email
   let user=await UserModel.findOne({email:email})
   //If email is not existed
   if(user===null)
   {
      return res.status(400).json({message:"Invalid Email"})
   }
   //Here compare is a function of bcrypt.
   //it compares the hashed password and password user enters while login
   let result =await compare(password,user.password)
   //if passwords are not matched
   if(result===false)
   {
      return res.status(400).json({meassage:"Invalid password"})
   }
   //if passwords match
   //create token(jsonwebtoken)
   const signedtoken=sign({email:user.email},process.env.SECRECT_KEY,{expiresIn:"1h"})
   //expiresIn time can be "1d","1h","1w"
   //arguments are payload,secretkey ,validity(time)

   //store token as httpOnly cookie
   res.cookie("token",signedtoken,{
      httpOnly:true,
      sameSite:"lax",
      secure:false
   })
   //send response
   res.status(200).json({message:"login success",payload:user})
});


//******* ADD PRODUCT TO THE CART ********
userapp.put("/cart/product-id/:pid",verifytoken,async(req,res)=>{
   //get product id from url param
   let productId=req.params.pid
   //get current user details
   const emailOfUser=req.user?.email
//find user and add product to cart
let result=await UserModel.findOneAndUpdate({email:emailOfUser},
{$push:{cart:{product:productId}}})
//send res
if(!result)
{
   return res.status(404).json({message:"user not found"});
}
res.status(200).json({message:"Product Added to the cart"})
});
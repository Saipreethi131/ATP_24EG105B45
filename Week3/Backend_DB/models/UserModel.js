import {Schema,model,Types} from 'mongoose'

//create CART schema
const cartSchema=new Schema({
    product:{
        type:Types.ObjectId,
        ref:"product"//name of the product model

    },
    count:{
        type:Number,
        default:1
    }
})


//Schema Design

const userSchema =new Schema({
    username:{
        type:String ,
        required :[true,"username is required"],
        minlength:[4,"minimum length must be 4"],
        maxlength:[8,"username length exceeded 8 characters"]
    },
    password:{
        type:String,
        required:[true,"password is mandatory"]
    },
    email:{
        type:String,
        required:[true,"Email Required"],
  /*unique -It is not a validation rule(optional).It creates index for 
   the field in which it is created thereby making searching faster with 
   field.
  -can be applied only on an empty collection*/
        unique:[true,"Email already existing"]
    },
    age:{
        type:Number
    },
    cart:[cartSchema],//{product:"",count:2}
},
{
    versionKey:false,
    timestamps:true,
}, );
/*this validation only works while creating the new document of 
resources but not while updating the document. To check the validation
while updating too , we need add runValidators:true in the put route*/

//generate user model
export const UserModel= model("user",userSchema)
/*model method takes two parameters- a collection will be created by the 
name of first parameter and second parameter must be the schema which 
we created*/
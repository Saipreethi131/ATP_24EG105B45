//product schema design
/*Product structure
     a.productId (required)
     b.productName(required)
     c.price(required, min price 10000 and max price 50000)
     d.brand(required) */
 
import {Schema,model} from 'mongoose'
const productSchema =new Schema({
    productId:{
        type:String,
        required:[true,"ProductId is mandatory"],
    },
    productName:{
        type:String,
        required:[true,"Product Name is mandatory"]
    },
    price:{
        type:Number,
        required:[true,"price is mandatory"],
        min:10000,
        max:50000,
    },
    brand:{
        type:String,
        required:[true,"brand is mandatory"]
    }
},
{
    versionKey:false,
    timestamps:true,
})
export const productModel=model("product",productSchema)
//here product is the name of the product model
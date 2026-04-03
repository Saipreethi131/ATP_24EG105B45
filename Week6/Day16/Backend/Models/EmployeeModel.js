import {Schema,model} from "mongoose"

const employeeSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is mandatory"],
        unique:[true,"Email already existing"]
    },
    mobile:{
        type:Number,
        required:[true,"Email is mandatory"]
    },
    designation:{
        type:String,
        required:[true,"Designation is mandatory"],
    },
    companyname:{
        type:String,
        required:[true,"Company name is required"],
    },
},{
    timestamps:true,
    versionKey:false,
    strict:"throw"
})

//create model
export const employeemodel =model("employee",employeeSchema)
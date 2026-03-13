//create express app
import exp from 'express'
import {connect} from 'mongoose'
import {userapp} from "./APIs/UserAPI.js"
import {productapp} from "./APIs/ProductAPI.js"
import cookieParser from "cookie-parser";
import {config} from 'dotenv'
config();//process.env.PORT //process.env.DB_URL

const app =exp()
//add body parser middleware
app.use(exp.json())
//add cookie parser middleware
app.use(cookieParser());

app.use('/user-api',userapp)
app.use('/product-api',productapp)

//connect to DB server
/*must start the database server first and then http server because if 
database is not connected ,there is no use of starting the http server */

/*connect().then().catch() (previouly used now async and await are used to 
consume the promise)*/

async function connectDB(){
    try{
     await connect(process.env.MONGODB_URL)
     console.log("DB connection success")

     //start the server
     const port =process.env.PORT || 4000
     app.listen(port ,()=>console.log(`server listening to port ${port}...`))
    }
    catch(err)
    {
     console.log("err in DB connection :",err)
    }
}
connectDB();
//error object contains{name,message,error}

/*
error handling middleware - responds to both server side and client side
errors 
-executes only when error is occured in express application
-not same as normal middleware
-requires all the 4 parameters to be considered as error handling middleware
*/
app.use((err,req,res,next)=>{
    
    console.log(err.name)
    if(err.name==="ValidationError")
    {
       return res.status(400).json({message:"Validation error",error:"validation error"})
    }
    if(err.name==="CastError")
    {
       return res.status(400).json({message:"error occured",error:"cast error"})
    }
    //server side errors
    res.status(500).json({message:"error occures",error:"Server side errors"})
  
})

//invalid objectid gives CastError(object id parsing failed)
//violation of unique field(email)(duplicate email) -MongooseError 
import exp from "express"
import {config} from "dotenv"
import {connect} from "mongoose"
import cookieParser from "cookie-parser"
import {employeeapp} from "./APIs/EmployeeAPI.js"
import cors from "cors"

const app=exp()

app.use(cors({
    origin:['http://localhost:5173']
}))

config()
app.use(exp.json())
app.use(cookieParser())

app.use("/employee-api",employeeapp)

const connectDB=async()=>{
    try{
        await connect(process.env.DB_URL)
        console.log("Database Server Connected")
        const port=process.env.PORT || 3000
        app.listen(port,()=>console.log(`server listening on ${port}...`))
    }
    catch(err){
        console.log("err in DB connection",err)
    }
}
connectDB();
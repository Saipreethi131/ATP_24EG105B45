import exp from "express"
import {config} from "dotenv"
import {connect} from "mongoose"
import cookieParser from "cookie-parser"
import {employeeapp} from "./APIs/EmployeeAPI.js"
import cors from "cors"
import path from "path"
import { fileURLToPath } from "url"

const app=exp()

config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// configure CORS origins from env or fallback to localhost
app.use(cors({
    origin: process.env.CORS_ORIGIN && process.env.CORS_ORIGIN !== '*' ? process.env.CORS_ORIGIN.split(',') : '*'
}))

app.use(exp.json())
app.use(cookieParser())

app.use("/employee-api",employeeapp)

// health endpoint for readiness checks
app.get('/health', (req, res) => res.sendStatus(200))

// If running in production, serve frontend build
if (process.env.NODE_ENV === 'production') {
    const distPath = path.join(__dirname, '..', 'Frontend', 'dist')
    app.use(exp.static(distPath))
    app.get(/.*/, (req, res) => {
        res.sendFile(path.join(distPath, 'index.html'))
    })
}

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
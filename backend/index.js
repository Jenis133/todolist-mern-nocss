import  express,{json } from "express"
import connectToDb from "./src/connectToDb/connectToDb.js"
import toDoRouter from "./src/router/toDoRouter.js"
import cors from "cors"
const expressApp = express()
expressApp.use(cors())
expressApp.use(json())
connectToDb()
expressApp.use("/todolists",toDoRouter)
expressApp.listen(8000,()=>{
console.log("App is listening on port 8000")
})

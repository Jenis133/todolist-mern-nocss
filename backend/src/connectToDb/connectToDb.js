import mongoose from "mongoose";
const connectToDb = ()=>{
   
    const result = mongoose.connect("mongodb://0.0.0.0:27017/todolist")
    console.log("Connected to Database successfully")
  
 
}
export default connectToDb

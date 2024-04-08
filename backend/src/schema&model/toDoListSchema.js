import { Schema } from "mongoose";
const toDoListSchema = Schema({
 task : {
    type:String
 },
 description : {
    type:String
 },
 isCompleted : {
    type:Boolean
 }

})
export default toDoListSchema
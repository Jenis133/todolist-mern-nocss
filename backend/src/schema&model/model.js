import { model } from "mongoose";
import toDoListSchema from "./toDoListSchema.js";

export const ToDo = model("ToDoList",toDoListSchema)
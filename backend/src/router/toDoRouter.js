import { Router } from "express";
import { createToDoController, readAllToDoController } from "../controller/toDoController.js";


const toDoRouter = Router()
toDoRouter
.route("/")
.post(createToDoController)
.get(readAllToDoController)


export default toDoRouter
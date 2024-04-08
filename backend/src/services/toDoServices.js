import { ToDo } from "../schema&model/model.js"

export const createServices = async (data) => {
    return await ToDo.create(data);
  };

export const readAllServices = async ()=>{
    return await ToDo.find({})
}

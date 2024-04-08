import { createServices, readAllServices } from "../services/toDoServices.js"

export const createToDoController = async(req,res,next)=>{ 
        try {
            const result = await createServices(req.body)

            res.json({
                success:true,
                message:"Successfully entered data",
                
            })
        } catch (error) {
            res.json({
                success:false,
                message:error.message
            })
        }
    }
export const readAllToDoController = async(req,res,next)=>{ 
        try {
            const result = await readAllServices()
            res.json({
                success:true,
                message:"Successfully read data",
                data:result
                
            })
        } catch (error) {
            res.json({
                success:false,
                message:error.message
            })
        }
    }


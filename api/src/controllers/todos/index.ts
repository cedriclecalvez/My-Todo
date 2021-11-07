import { Response, Request } from "express";
import { ITodo } from "./../../types/todo";
import TodoModel from "./../../models/todoSchema";

const getTodo = async (req:Request,res:Response):Promise<void> => {
    try{ 
        // on utilise les types enregistrés
        const todos : ITodo[] = await TodoModel.find()
        console.log("controller getTodo:", todos);
        
        res.status(200).json({todos})
    } catch(error){
        throw error
    }
}

export { getTodo }
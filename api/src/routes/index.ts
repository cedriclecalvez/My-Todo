import { Router,Request,Response } from "express";
import { getTodos, addTodo, updateTodo, deleteTodo } from "./../controllers/todos/index";

const router: Router = Router();

// racine de l'api
router.get("/", (_: Request, res: Response) => {
    //console.log("req:",req );
    //console.log("res:",res );
    res.send("Voici la racine de mon api");
  });

router.get("/todos", getTodos);

router.post("/add-todo", addTodo);

router.put("/edit-todo/:id", updateTodo);

router.delete("/delete-todo/:id", deleteTodo);

export default router;

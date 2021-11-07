import { Router,Request,Response } from "express";
import { getTodo } from "./../controllers/todos/index";

const router: Router = Router();

// racine de l'api
router.get("/", (_: Request, res: Response) => {
    //console.log("req:",req );
    //console.log("res:",res );
    res.send("Voici la racine de mon api");
  });

router.get("/todos", getTodo);

export default router;

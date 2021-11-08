import { Response, Request } from "express";
import { ITodo } from "./../../types/todo";
import TodoModel from "./../../models/todoSchema";

const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    // on utilise les types enregistrés
    const todos: ITodo[] = await TodoModel.find();
    console.log("controller getTodo:", todos);

    res.status(200).json({ todos });
  } catch (error) {
    throw error;
  }
};

const addTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<ITodo, "name" | "description" | "status">;

    const todo: ITodo = new TodoModel({
      name: body.name,
      description: body.description,
      status: body.status,
    });

    const newTodo = await todo.save();
    const allTodos: ITodo[] = await TodoModel.find();

    res
      .status(201)
      .json({ message: "Todo added", todo: newTodo, todos: allTodos });
  } catch (error) {
    console.log("error:", error);
    throw error;
  }
};

const updateTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    //   console.log("id:",id);
    //   console.log("body:",body);

    const updateTodo: ITodo | null = await TodoModel.findByIdAndUpdate(
      { _id: id },
      body
    );
    //   console.log("updateTodo => findByIdAndUpdate:",updateTodo)
    const allTodos: ITodo[] = await TodoModel.find();

    // on renvoie un message, le todo mis a jour, et la todolist mis a jour
    res
      .status(200)
      .json({ message: "Todo updated", todo: updateTodo, todos: allTodos });
  } catch (error) {
    console.log("error:", error);
    throw error;
  }
};

const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const deleteTodo: ITodo | null = await TodoModel.findByIdAndRemove(
      req.params.id
    );
    const allTodos: ITodo[] = await TodoModel.find();

    res
      .status(200)
      .json({ message: "Todo deleted", todo: deleteTodo, todos: allTodos });
  } catch (error) {
    console.log("error:", error);
    throw error;
  }
};

export { getTodos, addTodo, updateTodo, deleteTodo };

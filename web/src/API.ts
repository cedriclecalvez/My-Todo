import axios, { AxiosResponse } from "axios";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    // nous utilisons la fonction getTodos()pour obtenir des données du serveur. Il renverra une promesse de type AxiosResponsecontenant les Todos récupérés qui doivent correspondre au type ApiDataType.
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/todos"
    );
    return todos;
  } catch (error: any) {
    // console.log(error);
    throw new Error(error);
  }
};

export const addTodo = async (
  formData: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    // Cette fonction reçoit en argument les données saisies par l'utilisateur et renvoie une promesse. Ici, nous devons omettre la _idpropriété car MongoDB la créera à la volée.
    const todo: Omit<ITodo, "_id"> = {
      name: formData.name,
      description: formData.description,
      status: false,
    };

    const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/add-todo",
      todo
    );

    return saveTodo;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

export const updateTodo = async (
  todo: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    // Pour mettre à jour un Todo, nous devons transmettre les données mises à jour et le _idde l'objet. Ici, nous devons changer le statusTodo, c'est pourquoi je choisis uniquement la propriété dont nous avons besoin avant d'envoyer la requête au serveur.
    const todoUpdate: Pick<ITodo, "status"> = { status: true };
    const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/edit-todo/${todo._id}`,
      todoUpdate
    );
    return updatedTodo;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deleteTodo = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    //la fonction qui reçoit en paramètre la _idpropriété et renvoie une promesse.
    const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/delete-todo/${_id}`
    );
    return deletedTodo;
  } catch (error: any) {
    throw new Error(error);
  }
};

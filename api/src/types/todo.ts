import { Document } from "mongoose"

//je peux utiliser ITodo dans d'autre fichier de mongoose
export interface ITodo extends Document {
  name: string
  description: string
  status: boolean
}
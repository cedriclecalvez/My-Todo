import { ITodo } from "../types/todo";
import { model, Schema } from "mongoose";

const todoSchema: Schema = new Schema(
  {
    name: {
      type: String,
      // required: true
    },
    description: {
      type: String,
      // required: true
    },
    status: {
      type: Boolean,
      // required: true
    },
  },
  { timestamps: true }
);

// je définis ITodo comme typage du model
export default model<ITodo>("TodoModel", todoSchema);

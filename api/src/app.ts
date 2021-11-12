import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "./routes/index";


const app: Express = express();
app.use(express.json());

const PORT = process.env.PORT;
const URL: any =process.env.APP_BASE_URL

// app.use(cors({origin:"http://localhost:1234"}));
app.use(cors());
app.use(URL,todoRoutes);

const uri: any = process.env.MONGO_DB;

const options = {
  connectTimeoutMS: 5000,
  useUnifiedTopology: true,
  useNewUrlParser: true,
}
// mongoose.set("useFindAndModify", false)

mongoose
  .connect(uri, options)
  .then(()=> console.log("Connected to MongoDB"))
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch((error) => {
    console.log("error:", error);
    throw error;
  });

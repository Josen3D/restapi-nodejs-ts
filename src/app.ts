//import dotenv config
import "dotenv/config";
//install express and cors
import express from "express";
import cors from "cors";
import { router } from "./routes";
import db from "./config/mongo";

const PORT = process.env.PORT || 3001;

//create express app
const app = express();
app.use(cors()); // use cors
app.use(express.json()); // use json

app.use(router);

db().then(() => console.log("Conexión a DB lista"));

//put to listen the app
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

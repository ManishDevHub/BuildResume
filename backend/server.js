import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoutes.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;


app.use(express.json()); 
connectDB();

app.use('/', userRouter)


app.get("/", (req, res) => {
  res.send("Hello World from backend!");
});


app.listen(PORT, () => {
  console.log(`server Started on PORT ${PORT}`);
});

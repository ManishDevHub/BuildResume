import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import path from 'path'
import { fileURLToPath } from "url";
import  resumeRoutes from "./routes/resumeRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;


app.use(express.json()); 
connectDB();

app.use('/', userRouter)
app.use('/api/resume', resumeRoutes);

app.use(
  '/upkoads',
  express.static(path.join(__dirname, 'uploads'),{
    setHeaders: (res, _path) => {
      res.set('Access-control-allow-origin', 'http://localhost:5173' )
    }
  })
)


app.get("/", (req, res) => {
  res.send("Hello World from backend!");
});


app.listen(PORT, () => {
  console.log(`server Started on PORT ${PORT}`);
});

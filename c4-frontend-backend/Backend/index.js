import express from "express";
import cors from "cors";
import { taskRoutes } from "./routes/taskRoutes.js";
import dotenv from "dotenv";
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("welcome to bc");
});
app.use("/tasks", taskRoutes);

// server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("server started");
});

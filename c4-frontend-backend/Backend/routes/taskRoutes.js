import express from "express";
import taskController from "../controller/taskController.js";
export const taskRoutes = express.Router();

taskRoutes.get("/", taskController.getAllTask);
taskRoutes.post("/add", taskController.addTask);
taskRoutes.delete("/delete/:id", taskController.deleteTask);
taskRoutes.put("/update/:id", taskController.updateTask);

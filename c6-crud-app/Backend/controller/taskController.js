import { v4 as uuidv4 } from "uuid";

const Tasks = [];
const taskController = {
  getAllTask: (req, res) => {
    try {
      res.status(200).send({ status: 200, message: "success", data: Tasks });
    } catch (error) {
      res.status(400).send({ status: 400, message: "something went wrong" });
    }
  },
  addTask: (req, res) => {
    const data = req.body;
    try {
      Tasks.push({ id: uuidv4(), ...data });
      res.status(200).send({
        status: 200,
        message: "success",
        data: Tasks,
      });
    } catch (error) {
      res.status(400).send({ status: 400, message: "something went wrong" });
    }
  },
  deleteTask: (req, res) => {
    res.send("delte hogya");
  },
  updateTask: (req, res) => {
    res.send("Update hogya");
  },
};

export default taskController;

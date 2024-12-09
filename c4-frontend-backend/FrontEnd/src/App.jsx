import React, { useEffect, useState } from "react";
import axios from "axios";
import { isEmpty } from "./constant/isEmpty";
import { getData } from "./api/axios";
import AddTask from "./AddTask";
const App = () => {
  const [tasks, setTasks] = useState([]);
  const getAllTask = async () => {
    const response = await getData("/tasks");
    setTasks(response?.data?.data);
  };
  useEffect(() => {
    getAllTask();
  }, []);

  return (
    <div>
      <AddTask />
      {Array.isArray(tasks) &&
        tasks.map((task) => {
          return (
            <div key={task.id}>
              <p>title:{isEmpty(task?.task)}</p>
              <p>date:{task?.created_at}</p>
            </div>
          );
        })}
    </div>
  );
};

export default App;

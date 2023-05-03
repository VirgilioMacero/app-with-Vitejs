import { createContext, useState, useEffect} from "react";
import { tasks as data } from "../data/task.js";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTask] = useState([]);

  function createTask(Task) {
    setTask([
      ...tasks,
      { title: Task.title, id: tasks.length, description: Task.description },
    ]);
  }

  function deleteTask(taskId) {
    setTask(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    return setTask(data);
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}

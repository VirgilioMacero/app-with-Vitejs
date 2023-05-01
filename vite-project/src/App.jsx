import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { tasks as data } from "./data/task";

export function App() {
  const [tasks, setTask] = useState([]);

  function createTask(Task) {
    setTask([
      ...tasks,
      { title: Task.title, id: tasks.length, description: Task.description },
    ]);
  }

  function deleteTask(taskId) {
    setTask(tasks.filter(task => task.id !== taskId))
  }

  useEffect(() => {
    return setTask(data);
  }, []);

  return (
    <div>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ Task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md" key={Task.id}>
      <h1 className="text-xl font-bold capitalize">{Task.title}</h1>
      <p className="text-gray-500 text-sm">{Task.description}</p>
      <button className="bg-red-500 px-2 py-1 rounded-md mt-3 hover:bg-red-400"
        onClick={() => {
          deleteTask(Task.id);
        }}
      >
        Eliminar
      </button>
    </div>
  );
}

export default TaskCard;

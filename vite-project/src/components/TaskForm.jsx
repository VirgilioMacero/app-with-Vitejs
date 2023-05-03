import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title: text,
      description,
    });

    setDescription("");
    setText("");
  };

  const { createTask } = useContext(TaskContext);
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 rounded-md">
      <h1 className="text-2xl font-bold text-white mb-2">Ingrese una nueva tarea</h1>
        <input
          placeholder="Escribe tu Tarea"
          onChange={(evnt) => {
            setText(evnt.target.value);
          }}
          value={text}
          className="bg-slate-300 p-3 w-full mb-3 rounded-md"
          autoFocus
        ></input>
        <textarea
          placeholder="Escribe una descripcion"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          className="bg-slate-300 p-3 w-full mb-3 rounded-md"
        ></textarea>
        <button className="bg-sky-900 px-4 py-1 text-white rounded-md hover:bg-sky-500">Save</button>
      </form>
    </div>
  );
}

export default TaskForm;

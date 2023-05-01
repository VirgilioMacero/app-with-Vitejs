import { useState } from "react";

function TaskForm({ createTask }) {
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

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu Tarea"
        onChange={(evnt) => {
          setText(evnt.target.value);
        }}
        value={text}
        autoFocus
      ></input>
      <textarea
        placeholder="Escribe una descripcion"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
      ></textarea>
      <button>Save</button>
    </form>
  );
}

export default TaskForm;


function TaskCard({Task,deleteTask}) {
  return (

          <div key={Task.id}>
            <h1>{Task.title}</h1>
            <p>{Task.description}</p>
            <button onClick={() => {deleteTask(Task.id)}}>Eliminar</button>
          </div>
        );
}

export default TaskCard;
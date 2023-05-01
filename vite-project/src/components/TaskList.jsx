import TaskCard from "./TaskCards";


function TaskList({tasks, deleteTask}) {

  if (tasks.length === 0) {
    return <h1>No Hay Tareas</h1>;
  }

  return (
    <div>
      {tasks.map((task) => {
        return (
          <TaskCard key={task.id} Task={task} deleteTask={deleteTask}/>
        );
      })}
    </div>
  );
}

export default TaskList;

import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

export function App() {
  return (
    <main className="bg-sky-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

import {useState} from "react";
import TaskListApp from "@monorepo/task-list-pkg/index"; // Assuming you've set up monorepo management for imports
import TaskFormApp from "@monorepo/task-form-pkg/index"; // (e.g., using Lerna or Yarn Workspaces)
import {Task} from "@monorepo/types"; // (e.g., using Lerna or Yarn Workspaces)

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (newTask: string) => {
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
  };

  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>Listă de cumpărături (Monorepo)</h1>
      <TaskFormApp onAddTask={addTask} />
      <TaskListApp
        tasks={tasks}
        onToggleComplete={toggleComplete}
        onDeleteTask={deleteTask}
      />
    </div>
  );
}

export default App;

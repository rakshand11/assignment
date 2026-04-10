import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { getTask } from "./api/task";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const data = await getTask();
      setTasks(data.tasks);
      setError("");
    } catch (error) {
      setError("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Task Manager</h1>
      <TaskForm onTaskCreated={fetchTasks} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <TaskList tasks={tasks} onUpdate={fetchTasks} />
    </div>
  );
};

export default App;

import { useState } from "react";
import { createTask } from "../api/task.js";

const TaskForm = ({ onTaskCreated }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title === "") {
      setError("Title cannot be empty");
      return;
    }

    try {
      await createTask(title);
      setTitle("");
      setError("");
      onTaskCreated();
    } catch (error) {
      setError("Failed to create task");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task title"
      />
      <button onClick={handleSubmit}>Add Task</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default TaskForm;

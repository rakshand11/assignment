import { deleteTask, updateTask } from "../api/task.js";

const TaskItem = ({ task, onUpdate }) => {
  const handleDelete = async () => {
    try {
      await deleteTask(task._id);
      onUpdate();
    } catch (error) {
      alert("Failed to delete task");
    }
  };

  const handleComplete = async () => {
    try {
      await updateTask(task._id);
      onUpdate();
    } catch (error) {
      alert("Failed to update task");
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleComplete}
      />
      <span>{task.title}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;

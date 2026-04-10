import TaskItem from "./TaskItem.jsx";

const TaskList = ({ tasks, onUpdate }) => {
  if (tasks.length === 0) {
    return <p>No tasks yet, add one above!</p>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} onUpdate={onUpdate} />
      ))}
    </div>
  );
};

export default TaskList;

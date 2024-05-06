const Task = ({ task, onDelete, onToogleDone }) => {
  return (
    <li>
      <span
        onClick={onToogleDone}
        style={{ textDecoration: task.done ? "line-through" : "none" }}
      >
        {task.text}
      </span>
      <button onClick={onDelete}>Remover</button>
    </li>
  );
};
export default Task;

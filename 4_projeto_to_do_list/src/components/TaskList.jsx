import Task from "./Task";

const TaskList = ({ tasks, onDeleteTask, onToogleTaskDone }) => {
  if (tasks.length < 1) {
    return <h3>Não há tarefas na lista</h3>;
  } else {
    return (
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={() => onDeleteTask(task.id)}
            onToogleDone={() => onToogleTaskDone(task.id)}
          />
        ))}
      </ul>
    );
  }
};
export default TaskList;

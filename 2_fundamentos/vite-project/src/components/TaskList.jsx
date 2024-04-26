const TaskList = ({ list }) => {
  if (list.length === 0) {
    return <div>Não há tarefas para mostrar!!!</div>;
  }

  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>{item.task}</li>
      ))}
    </ul>
  );
};
export default TaskList;

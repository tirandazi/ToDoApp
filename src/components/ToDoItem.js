const ToDoItem = ({ item, isComplete, index, onStatusChange }) => {
  const element = isComplete ? <s>{item}</s> : item;

  return (
    <p onClick={() => onStatusChange(index)} className="todo-item">
      {element}
    </p>
  );
};

export default ToDoItem;

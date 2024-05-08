import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDoList }) => {
  return (
    <div className="Container">
      {toDoList.map((todo) => {
        return <ToDoItem key={todo.id} item={todo.task} />;
      })}
    </div>
  );
};

export default ToDoList;

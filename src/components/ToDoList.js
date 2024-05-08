import ToDoItem from "./ToDoItem";

const List = ({ toDoList }) => {
  return (
    <div className="Container">
      {toDoList.length ? (
        toDoList.map((todo) => {
          return <ToDoItem key={todo.id} item={todo.task} />;
        })
      ) : (
        <em>Nothing to do buddy. Sleep!</em>
      )}
    </div>
  );
};

export default List;

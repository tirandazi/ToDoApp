import ToDoItem from "./ToDoItem";

const List = ({ toDoList, onStatusUpdate }) => {
  return (
    <div className="Container">
      {toDoList.length ? (
        toDoList.map((todo, index) => {
          return (
            <ToDoItem
              key={todo.id}
              item={todo.task}
              isComplete={todo.isComplete}
              index={index}
              onStatusChange={onStatusUpdate}
            />
          );
        })
      ) : (
        <em>Nothing to do buddy. Sleep!</em>
      )}
    </div>
  );
};

export default List;

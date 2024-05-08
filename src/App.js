import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./styles.css";
import Button from "./components/Button";

export default function App() {
  const [toDoList, setToDoList] = useState(
    Array(
      { id: crypto.randomUUID(), task: "Read SpringBoot", isComplete: false },
      {
        id: crypto.randomUUID(),
        task: "Complete assignments",
        isComplete: false,
      },
      { id: crypto.randomUUID(), task: "Prepare breakfast", isComplete: false },
      { id: crypto.randomUUID(), task: "Sleep for 2 hours", isComplete: false },
      { id: crypto.randomUUID(), task: "Take a shower", isComplete: false }
    )
  );

  const handleItemRemove = () =>
    setToDoList(toDoList.filter((item) => !item.isComplete));

  const handleStatusUpdate = (index) => {
    const list = toDoList.slice();
    list[index].isComplete = !list[index].isComplete;
    setToDoList(list);
  };

  return (
    <>
      <Header name={"ToDoApp"} />
      <ToDoList toDoList={toDoList} onStatusUpdate={handleStatusUpdate} />
      <Button name={"Remove Completed"} onBtnClick={handleItemRemove} />
    </>
  );
}

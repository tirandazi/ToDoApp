import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./styles.css";

export default function App() {
  const [toDoList, setToDoList] = useState(
    Array(
      { id: crypto.randomUUID(), task: "Read SpringBoot" },
      { id: crypto.randomUUID(), task: "Complete assignments" },
      { id: crypto.randomUUID(), task: "Prepare breakfast" },
      { id: crypto.randomUUID(), task: "Sleep for 2 hours" },
      { id: crypto.randomUUID(), task: "Take a shower" }
    )
  );
  return (
    <>
      <Header name={"ToDoApp"} />
      <ToDoList toDoList={toDoList} />
    </>
  );
}

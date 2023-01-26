import React, { useState } from "react";
import style from "./app.module.css";
import CreateTodo from "./сomponents/CreateTodo";
import Todos from "./сomponents/Todos";

const initialDate = [
  { id: 1, title: "First Task", completed: false },
  { id: 2, title: "Second Task", completed: false },
  { id: 3, title: "Third Task", completed: false },
];

function DragAndDropAppComponent() {
  const [todos, setTodos] = useState(initialDate);
 
  const onRemove = (id) => {
    setTodos(
      todos.filter(todo=> todo.id !== id)
    )
  }
  

  return (
    <div className={style.container}>
    <h1>Drag and Drop</h1>
      <CreateTodo onCreate={setTodos} />
      <Todos todos={todos} onRemove={onRemove} setTodos={setTodos}/>
      <p className={style.footer}>*double click to delete</p>
    </div>
  );
}

export default DragAndDropAppComponent;

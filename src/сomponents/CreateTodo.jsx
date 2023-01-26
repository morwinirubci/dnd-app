import React from "react";
import style from "../app.module.css";

const CreateTodo = ({ onCreate }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.todo.value;

    if (e.target.todo.value) {
      onCreate((prevTodos) => [
        ...prevTodos,
        {
          title,
          completed: false,
          id: Date.now(),
        },
      ]);

      e.target.reset();
    }
  };
  return (
    <form onSubmit={handleSubmit} autoComplete="off" className={style.createTodo}>
      <input placeholder="New ToDo" name="todo"/>
      <button>Add ToDo</button>
    </form>
  );
};

export default CreateTodo;

import React from "react";
import style from "../app.module.css";
import { Reorder, AnimatePresence } from "framer-motion";

const animations = {
  initial: {
    opacity: 0,
    height: 0,
  },
  animate: {
    opacity: 1,
    height: "60px",
  },
  exit: {
    opacity: 0,
    height: 0,
  },
};

const Todos = ({ todos = [], setTodos, onRemove }) => {
  return (
    <Reorder.Group axys="y" values={todos} onReorder={setTodos}>
      <AnimatePresence>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onRemove={onRemove}/>
        ))}
      </AnimatePresence>
    </Reorder.Group>
  );
};

const TodoItem = ({ todo, onRemove }) => {
  return (
    <Reorder.Item
      className={style.todoItem}
      value={todo}
      whileDrag={{ scale: 1.05 }}
      {...animations}
      onDoubleClick={() => onRemove(todo.id)}
    >
      <span >{todo.title}</span>
    </Reorder.Item>
  );
};

export default Todos;

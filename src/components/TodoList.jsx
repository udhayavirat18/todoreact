import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const {items} = props;
  return (
    <ul className="main">
      {items.map((item, todoIndex) => (
        <TodoCard {...props} key={todoIndex} index={todoIndex}>
          <p>{item}</p>
        </TodoCard>
      ))}
    </ul>
  );
}

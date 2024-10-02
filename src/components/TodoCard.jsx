import React from "react";

export default function TodoCard(props) {
  const { children, handleDelete,handleEdit, index } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button onClick={() => {
          handleEdit(index);
        }}>
          <i className="fa-solid fa-pen-fancy"></i>
        </button>
        <button
          onClick={() => {
            handleDelete(index);
          }}
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}

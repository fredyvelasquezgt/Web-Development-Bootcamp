import React from "react";

function ToDoItem(props) {
  const { items } = props;
  return (
    <div>
      <ul>
        {items.map((todoItem) => (
          <li>{todoItem}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoItem;

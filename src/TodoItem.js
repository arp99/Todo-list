import { useState } from "react";

export default function TodoItem({ item }) {
  const [isComplete, setComplete] = useState(false);

  const striked = {
    textDecoration: "line-through",
    textDecorationColor: "#fcdab7"
  };
  const notStriked = {
    textDecoration: "none"
  };

  return (
    <div className="todo-item">
      <p
        onClick={() => setComplete((prev) => !prev)}
        style={isComplete ? striked : notStriked}
      >
        {item.itemName}
      </p>
    </div>
  );
}

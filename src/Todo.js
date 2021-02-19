import TodoItem from "./TodoItem";
import { useState } from "react";

export default function Todo() {
  const [value, setValue] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  function inputChangeHandler(evt) {
    setValue(evt.target.value);
  }
  function btnClickHandler(evt) {
    evt.preventDefault();
    setTodoItems([...todoItems, { itemName: value }]);
    setValue("");
  }
  return (
    <div className="wrapper">
      <form className="input-grp">
        <input
          onChange={inputChangeHandler}
          value={value}
          placeholder="Enter Todo"
          autoFocus={true}
        />
        <button onClick={btnClickHandler} type="submit">
          Add Todo
        </button>
      </form>
      <div className="todo_container">
        {todoItems.map((item, index) => (
          <TodoItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

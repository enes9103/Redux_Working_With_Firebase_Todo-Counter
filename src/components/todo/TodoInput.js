import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/todoActions";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text))
    setText('')
  };
  
  return (
        <form onSubmit={handleSubmit}>
          <input
            className="todo-input"
            type="text"
            placeholder="Add Todo"
            value={text}
            onChange={(e) =>setText(e.target.value) }
          />
          <button className="add-button" onClick={handleSubmit}>
            Add
          </button>
        </form>
  );
};

export default TodoInput;

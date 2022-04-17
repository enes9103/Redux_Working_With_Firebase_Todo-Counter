import React from "react";
import okLogo from "../../assets/ok.png";
import deleteLogo from "../../assets/delete.png";
// import editLogo from "../../assets/editLogo.webp";

import { useDispatch } from "react-redux";
import {
  delete_todo,
  toggle_todo,
  // editTodo,
} from "../../redux/actions/todoActions";
import { useState } from "react";

const TodoItem = ({ completed, text, id }) => {
  const dispatch = useDispatch();
  // const [visible, setVisible] = useState(false);
  const [todo, setTodo] = useState(text);

  const handleToggle = () => {
    // dispatch({type: 'TOGGLE_TODO', payload:id})
    dispatch(toggle_todo(id));
  };

  const handleDelete = () => {
    dispatch(delete_todo(id));
  };

  // const handleEdit = () => {
  //   console.log("edit");
  //   dispatch(editTodo({ id, todo }));
  //   setVisible(!visible);
  // };

  const styled = {
    textDecoration: completed ? "line-through" : "none",
    backgroundColor: completed ? "#A9A9A9" : "orange",
    borderRadius: "5px",
  };

  return (
    <div style={styled} className="todo-list">
      <h2 className="todoText">{todo}</h2>
      {/* <div className="todoEdit">
      {visible && <input
            className="todo-edit"
            type="text"
            placeholder="Add Todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />}
      {visible&&<button className="update" onClick={() =>setVisible(!visible)}>OK</button>}   
      </div>  */}
      <div>
        <span>
          <img
            src={okLogo}
            className="ok-logo"
            alt="ok logo"
            onClick={handleToggle}
          />
        </span>
        {/* <span>
          <img src={editLogo} alt="edit logo" className="edit-logo" onClick={handleEdit} />
        </span> */}
        <span>
          <img
            src={deleteLogo}
            className="delete-logo"
            alt="delete logo"
            onClick={handleDelete}
          />
        </span>

      </div>
    </div>
  );
};

export default TodoItem;


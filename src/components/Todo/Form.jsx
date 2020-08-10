import React from "react";

const Form = ({ setTodo, addTodo, todo }) => {
  console.log(todo);
  return (
    <React.Fragment>
      <form className="form-group">
        <input
          type="text"
          value={todo}
          placeholder="enter task"
          className="form-control"
          onChange={(event) => setTodo(event.target.value)}
        />
        <button
          className="btn btn-primary mt-3"
          type="button"
          onClick={(event) => addTodo(event)}
        >
          Add
        </button>
      </form>
    </React.Fragment>
  );
};

export default Form;

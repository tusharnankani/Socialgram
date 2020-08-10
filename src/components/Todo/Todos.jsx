import React from "react";

const Todos = ({ title, id, delTodo }) => {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#343a40",
          borderRadius: "0.25rem",
        }}
        className="container  p-3 mb-3"
        key={id}
      >
        {title}
        <button
          className="btn btn-danger"
          type="button"
          onClick={(event) => {
            event.preventDefault();
            delTodo(id);
          }}
        >
          Delete
        </button>
      </div>
    </React.Fragment>
  );
};

export default Todos;

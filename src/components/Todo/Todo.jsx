import React, { useState, useEffect, useContext } from "react";
import Form from "./Form";
import Todos from "./Todos";
import Navbar from "./Navbar";
import { TodoContext } from "../../TodoContext";

const App = () => {
  console.log("todo");
  const [todo, setTodo] = useState("");
  // const [allTodo, setAllTodo] = useState([]);
  const [allTodo, setAllTodo] = useContext(TodoContext);
  const url = `http://localhost:5050/`;

  useEffect(() => {
    getTodos();
  }, []);
  const getTodos = async () => {
    try {
      let response = await fetch(`${url}todo`);
      let results = await response.json();
      setAllTodo(results);
    } catch (error) {
      console.log(error);
    }
  };
  const addTodo = async (event) => {
    event.preventDefault();
    try {
      const response = {
        title: todo,
      };
      await fetch(`${url}todo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(response),
      });
    } catch (error) {
      console.log(error);
    }

    getTodos();
    setTodo("");
  };
  const delTodo = (id) => {
    const response = {
      _id: id,
    };

    fetch(`${url}todo`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(response),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    setTodo("");
    getTodos();
  };
  return (
    <React.Fragment>
      <Navbar />
      <div className="container text-center mt-5">
        <Form setTodo={setTodo} addTodo={addTodo} todo={todo} />
        {allTodo.map((todo) => (
          <Todos
            id={todo._id}
            key={todo._id}
            title={todo.title}
            todo={todo}
            delTodo={delTodo}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default App;

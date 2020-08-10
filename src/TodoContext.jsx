import React, { useState, createContext } from "react";

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const [alltodo, setAllTodo] = useState([
    {
      _id: "5f318372a54fa214e0cc67ca",
      date: "2020-08-10T17:26:25.261+00:00",
      title: "Watch Movie",
    },
  ]);
  return (
    <TodoContext.Provider value={[alltodo, setAllTodo]}>
      {props.children}
    </TodoContext.Provider>
  );
};

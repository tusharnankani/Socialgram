import React from "react";
import Facebook from "./components/Facebook/Facebook";
import Todo from "./components/Todo/Todo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TodoProvider } from "./TodoContext";
import { PostProvider } from "./PostContext";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/">
            <PostProvider>
              <Facebook />
            </PostProvider>
          </Route>
          <Route path="/facebook">
            <PostProvider>
              <Facebook />
            </PostProvider>
          </Route>
          <Route path="/todo">
            <TodoProvider>
              <Todo />
            </TodoProvider>
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;

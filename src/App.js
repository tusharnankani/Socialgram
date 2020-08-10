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
          <PostProvider>
            <Route path="/" exact component={Facebook} />
            <Route path="/facebook" component={Facebook} />
          </PostProvider>
          <TodoProvider>
            <Route path="/todo" component={Todo} />
          </TodoProvider>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;

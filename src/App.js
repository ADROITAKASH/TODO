import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/index";
import Tasks from "./components/Tasks/index";
import Card from "./components/TaskCard/index";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/tasks" component={Tasks} />
        <Route path="/card" component={Card} />
      </Switch>
    </React.Fragment>
  );
}

export default App;

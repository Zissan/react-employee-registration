import React from "react";
import Header from "./common/Header";
import Employee from "./Employee";
import EmployeeRegistration from "./EmployeeRegistration";
import About from "./About";
import PageNotFound from "./PageNotFound";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={Employee} />
        <Route path="/employee" component={EmployeeRegistration} />
        <Route path="/about" component={About} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./components/homepage";
import Coding from "./components/coding";
import Design from "./components/design";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/coding" component={Coding} />
        <Route exact path="/design" component={Design} />
      </Switch>
    </>
  );
}

export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./components/homepage";
import Coding from "./components/coding";
import Design from "./components/design";
import NotFound from "./components/notFound";
import AboutMe from "./components/aboutMe";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/coding" component={Coding} />
        <Route exact path="/design" component={Design} />
        <Route exact path="/NotFound" component={NotFound} />
        <Route exact path="/aboutMe" component={AboutMe} />
      </Switch>
    </>
  );
}

export default App;

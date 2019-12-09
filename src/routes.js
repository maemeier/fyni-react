import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Design from "./design";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" compoenent={Design} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  const routes = (
    <Switch>
      <Route path="/" render={() => <Home />} />
    </Switch>
  );
  return <Router basename={process.env.PUBLIC_URL}>{routes}</Router>;
}

export default App;

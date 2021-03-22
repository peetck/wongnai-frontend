import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";

import Home from "./pages/Home";
import tripsReducer from "./store/reducers/trips";

// create redux store and apply thunk middleware
const store = createStore(tripsReducer, applyMiddleware(thunkMiddleware));

function App() {
  const routes = (
    <Switch>
      <Route path="/" render={() => <Home />} />
    </Switch>
  );

  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>{routes}</Router>
    </Provider>
  );
}

export default App;

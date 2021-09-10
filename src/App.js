import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './pages';
import SigninPage from "./pages/Signin";
import DefaultApp from './pages/app'
import Profile from "./pages/profile";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/app" component={DefaultApp} exact />
        <Route path="/profile" component={Profile} exact />
      </Switch>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './pages';
import SigninPage from "./pages/Signin";
import DefaultApp from './pages/app'
import Profile from "./pages/profile";
import AppCreate from "./pages/appCreate";
import AppEdit from "./pages/appEdit";
import AppPlayer from "./pages/appPlayer";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/app" component={DefaultApp} exact />
        <Route path="/app/songs/create" component={AppCreate} exact />
        <Route path="/app/songs/edit/:songId" component={AppEdit} exact />
        <Route path="/app/player/:songId" component={AppPlayer} exact />
        <Route path="/profile/:username" component={Profile} exact />
      </Switch>
    </Router>
  );
}

export default App;

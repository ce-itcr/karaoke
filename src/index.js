import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import './assets/styles/tailwind.css';
import './assets/styles/player.css';

import App from './layouts/App';
import Landing from './views/Landing';
import Auth from './layouts/Auth';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/app" component={App}/>
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      <Route path="/" exact component={Landing} />
      {/* add redirect for first page */}
      {/* <Redirect from="*" to="/" /> */}
    </Switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
);


import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Component/Layout/Navbar";
import User from "./Component/Users/User";
import Alert from "./Component/Layout/Alert";
import About from "./Pages/About";
import GithubState from "./Context/Github/GithubState";
import AlertState from "./Context/Alert/AlertState";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";

export const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar title='Github-Finder' icon='fab fa-github' />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:username' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;

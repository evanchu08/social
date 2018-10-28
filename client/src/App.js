import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './components/user/Login';
import Signup from './components/user/Signup';
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/home/Home';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path = "/" component={Home} />
          <Route exact path = "/login" component={Login} />
          <Route exact path = "/signup" component={Signup} />
          <Route exact path = "/dashboard" component={Dashboard} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

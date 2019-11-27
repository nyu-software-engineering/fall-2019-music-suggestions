import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import WelcomePage from './components/welcomepage.component';
import SignIn from './components/sign-in-page.component';
import FindUser from './components/find-user.component';
//import UserList from './components/user-list.component';
import UpdateUser from './components/update-user.component.js'

const routing = (
  <Router>
    <Route exact path = "/" component = {WelcomePage} />
    <Route path="/signin" component = {SignIn}/>
    <Route path="/browse" component = {App}/>
    <Route path="/all" component = {FindUser}/>
    <Route path="/edit/:id" component={UpdateUser} />
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

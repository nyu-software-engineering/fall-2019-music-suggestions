import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import logo from '../haven-logo.png';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/browse" className="navbar-brand">Haven</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/createUser" className="nav-link">Sign Up</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Something</Link>
          </li>
          <li className="navbar-item">
          <Link to="/createProfile" className="nav-link">Create Profile</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}

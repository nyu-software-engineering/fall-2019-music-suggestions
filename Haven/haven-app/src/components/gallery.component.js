import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import bob from "../bob.jpeg";
const User = props => (

<div className="card-deck" style={{margin: '10px'}}>
  <div>
    {/* Card */}
    <div className="card mb-4">
      {/* Card image */}
      <div className="view view-cascade overlay">
        <img className="card-img-top" src={bob} alt="Card image cap" />
        <a><div className="mask rgba-white-slight"/></a>
      </div>
      <div className="card-body card-body-cascade text-center">
        {/* Title */}
        <h4 className="card-title"><strong>{props.user.display_name}</strong></h4>
        {/* Subtitle */}
        <h6 className="font-weight-bold indigo-text py-2">{props.user.username}</h6>
        {/* Text */}
        <p className="card-text">{props.user.genre} </p>
        {/* Facebook */}
        <a type="button" className="btn-floating btn-small btn-fb"><i className="fab fa-facebook-f" /></a>
        {/* Twitter */}
        <a type="button" className="btn-floating btn-small btn-tw"><i className="fab fa-twitter" /></a>
        {/* Google + */}
        <a type="button" className="btn-floating btn-small btn-dribbble"><i className="fab fa-dribbble" /></a>
      </div>
      <div className="card-footer text-muted text-center">
        {props.user.location}
      </div>
    </div>
    </div>
</div>



)


export default class Gallery extends Component {

  constructor(props) {
      super(props);

      this.state = {users: []};
    }

    componentDidMount() {
    axios.get('http://localhost:5000/profiles/')
      .then(response => {
        this.setState({ users: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  userList() {
    return this.state.users.map(currentUser => {
      return <User user={currentUser} key={currentUser._id}/>;
    })
  }

  render() {
    return (
        <div className="card-deck" style={{margin: '10px'}}>
          { this.userList() }
        {/* Start your project here*/}
        {/* SCRIPTS */}
        {/* JQuery */}
        {/* Bootstrap tooltips */}
        {/* Bootstrap core JavaScript */}
        {/* MDB core JavaScript */}
        </div>

    );
  }
}

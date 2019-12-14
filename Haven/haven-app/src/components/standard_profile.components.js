import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../css/view-profile.css"
import leena from "../images/leena.jpg";
import work1 from "../images/work1.jpg";
import work2 from "../images/work2.jpg";
import work3 from "../images/work3.jpg";

export default class StandardProfile extends Component {

  constructor(props) {
    super(props);
    this.onChangeDisplay_name = this.onChangeDisplay_name.bind(this);
    this.onChangeUserType = this.onChangeUserType.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      display_name: '',
      user_type: '',
      genre: '',
      description: '',
      location: '',
      website_url: '',
      profileImage:'',
      users: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/profiles/'+this.props.match.params.id)
    .then (response => {
      this.setState({
        display_name: response.data.display_name,
        user_type: response.data.user_type,
        genre: response.data.genre,
        description: response.data.description,
        location: response.data.location,
        website_url: response.data.website_url
      })
    })
    .catch(function(error){
      console.log(error);
    })

    axios.get('http://localhost:5000/profiles/')
      .then(response =>{
        if (response.data.length > 0){
          this.setState({
            profiles: response.data.map(profile => profile.display_name),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeDisplay_name(e){
    this.setState({
      display_name: e.target.value
    })
  }

  onChangeUserType(e){
    this.setState({
      user_type: e.target.value
    })
  }

  onChangeGenre(e){
    this.setState({
      genre: e.target.value
    })
  }

  onChangeDescription(e){
    this.setState({
      description: e.target.value
    })
  }

  onChangeLocation(e){
    this.setState({
      location: e.target.value
    })
  }

  onChangeWebsite_url(e){
    this.setState({
      website_url: e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();

    const profile = {
      display_name: this.state.display_name,
      user_type: this.state.user_type,
      genre: this.state.genre,
      description: this.state.description,
      location: this.state.location,
      website_url: this.state.website_url
    }

    console.log(profile);

    window.location = '/all'
  }



  render() {
    return (

      <div>
        {/* Card deck */}
        <div>
          {/* Card */}
          <div>
            {/* Card image */}
            <div>
              <img className="profilePic" src={leena} />
            </div>
            {/* Card content */}
            <div>
              {/* Title - Display Name*/}
              <h4><strong>{this.state.display_name}</strong></h4>
              {/* Subtitle - Genre*/}
              <h6>{this.state.genre}</h6>
              {/* Text - Description*/}
              <p>{this.state.description}</p>
              {/* Facebook */}
              <a type="button" className="socials"><i className="fab fa-facebook-f" /></a>
              {/* Twitter */}
              <a type="button" className="socials"><i className="fab fa-twitter" /></a>
              {/* Google + */}
              <a type="button" className="socials"><i className="fab fa-dribbble" /></a>
            </div>
            {/* Card footer */}
          </div>
          {/* Card */}
          <div>
            <img className="workPic" src={work1} />
            <img className="workPic" src={work2} />
            <img className="workPic" src={work3} />
          </div>
        </div>
        {/* Card deck */}
        </div>

    )
  }
}

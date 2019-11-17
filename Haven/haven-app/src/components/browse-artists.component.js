import React, { Component } from 'react';
import leena from "../images/leena.jpg";
import jimmy from "../images/jimmy.jpg";
import soo from "../images/soo.jpg";
import miles from "../images/miles.jpg";
import bloomberg from "../images/bloomberg.png";

export default class Browse extends Component {
  render() {
    return (

      <div>
        {/* Card deck */}
        <div className="card-deck" style={{margin: '10px'}}>
          {/* Card */}
          <div className="card mb-4">
            {/* Card image */}
            <div className="view view-cascade overlay">
              <img className="card-img-top" src={jimmy} alt="Card image cap"/>
              <a>
                <div className="mask rgba-white-slight" />
              </a>
            </div>
            {/* Card content */}
            <div className="card-body card-body-cascade text-center">
              {/* Title */}
              <h4 className="card-title"><strong>Jimmy Lin</strong></h4>
              {/* Subtitle */}
              <h6 className="font-weight-bold indigo-text py-2">Dancer</h6>
              {/* Text */}
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam.
              </p>
              {/* Facebook */}
              <a type="button" className="btn-floating btn-small btn-fb"><i className="fab fa-facebook-f" /></a>
              {/* Twitter */}
              <a type="button" className="btn-floating btn-small btn-tw"><i className="fab fa-twitter" /></a>
              {/* Google + */}
              <a type="button" className="btn-floating btn-small btn-dribbble"><i className="fab fa-dribbble" /></a>
            </div>
            {/* Card footer */}
            <div className="card-footer text-muted text-center">
              2 days ago
            </div>
          </div>
          {/* Card */}
          {/* Card */}
          <div className="card mb-4">
            {/* Card image */}
            <div className="view view-cascade overlay">
              <img className="card-img-top" src={bloomberg} alt="Card image cap" />
              <a>
                <div className="mask rgba-white-slight" />
              </a>
            </div>
            {/* Card content */}
            <div className="card-body card-body-cascade text-center">
              {/* Title */}
              <h4 className="card-title"><strong>Amos Bloomberg</strong></h4>
              {/* Subtitle */}
              <h6 className="font-weight-bold indigo-text py-2">DJ/Wedding Cake Baker</h6>
              {/* Text */}
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam.
              </p>
              {/* Facebook */}
              <a type="button" className="btn-floating btn-small btn-fb"><i className="fab fa-facebook-f" /></a>
              {/* Twitter */}
              <a type="button" className="btn-floating btn-small btn-tw"><i className="fab fa-twitter" /></a>
              {/* Google + */}
              <a type="button" className="btn-floating btn-small btn-dribbble"><i className="fab fa-dribbble" /></a>
            </div>
            {/* Card footer */}
            <div className="card-footer text-muted text-center">
              2 days ago
            </div>
          </div>
          {/* Card */}
          {/* Card */}
          <div className="card mb-4">
            {/* Card image */}
            <div className="view view-cascade overlay">
              <img className="card-img-top" src={leena} alt="Card image cap" />
              <a>
                <div className="mask rgba-white-slight" />
              </a>
            </div>
            {/* Card content */}
            <div className="card-body card-body-cascade text-center">
              {/* Title */}
              <h4 className="card-title"><strong>Leena Loo</strong></h4>
              {/* Subtitle */}
              <h6 className="font-weight-bold indigo-text py-2">Painter</h6>
              {/* Text */}
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam.
              </p>
              {/* Facebook */}
              <a type="button" className="btn-floating btn-small btn-fb"><i className="fab fa-facebook-f" /></a>
              {/* Twitter */}
              <a type="button" className="btn-floating btn-small btn-tw"><i className="fab fa-twitter" /></a>
              {/* Google + */}
              <a type="button" className="btn-floating btn-small btn-dribbble"><i className="fab fa-dribbble" /></a>
            </div>
            {/* Card footer */}
            <div className="card-footer text-muted text-center">
              2 days ago
            </div>
          </div>
          {/* Card */}
        </div>
        {/* Card deck */}
        {/* Card deck */}
        <div className="card-deck" style={{margin: '10px'}}>
          {/* Card */}
          <div className="card mb-4">
            {/* Card image */}
            <div className="view view-cascade overlay">
              <img className="card-img-top" src={miles} alt="Card image cap" />
              <a>
                <div className="mask rgba-white-slight" />
              </a>
            </div>
            {/* Card content */}
            <div className="card-body card-body-cascade text-center">
              {/* Title */}
              <h4 className="card-title"><strong>Miles Grossenbacher</strong></h4>
              {/* Subtitle */}
              <h6 className="font-weight-bold indigo-text py-2">Musician</h6>
              {/* Text */}
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam.
              </p>
              {/* Facebook */}
              <a type="button" className="btn-floating btn-small btn-fb"><i className="fab fa-facebook-f" /></a>
              {/* Twitter */}
              <a type="button" className="btn-floating btn-small btn-tw"><i className="fab fa-twitter" /></a>
              {/* Google + */}
              <a type="button" className="btn-floating btn-small btn-dribbble"><i className="fab fa-dribbble" /></a>
            </div>
            {/* Card footer */}
            <div className="card-footer text-muted text-center">
              2 days ago
            </div>
          </div>
          {/* Card */}
          {/* Card */}
          <div className="card mb-4">
            {/* Card image */}
            <div className="view view-cascade overlay">
              <img className="card-img-top" src={soo} alt="Card image cap" />
                <a>
                <div className="mask rgba-white-slight" />
              </a>
            </div>
            {/* Card content */}
            <div className="card-body card-body-cascade text-center">
              {/* Title */}
              <h4 className="card-title"><strong>Soo Spitz</strong></h4>
              {/* Subtitle */}
              <h6 className="font-weight-bold indigo-text py-2">Photographer</h6>
              {/* Text */}
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam.
              </p>
              {/* Facebook */}
              <a type="button" className="btn-floating btn-small btn-fb"><i className="fab fa-facebook-f" /></a>
              {/* Twitter */}
              <a type="button" className="btn-floating btn-small btn-tw"><i className="fab fa-twitter" /></a>
              {/* Google + */}
              <a type="button" className="btn-floating btn-small btn-dribbble"><i className="fab fa-dribbble" /></a>
            </div>
            {/* Card footer */}
            <div className="card-footer text-muted text-center">
              2 days ago
            </div>
          </div>
          {/* Card */}
          {/* Card */}
          <div className="card mb-4">
            {/* Card image */}
            <div className="view view-cascade overlay">
              <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/men.jpg" alt="Card image cap" />
              <a>
                <div className="mask rgba-white-slight" />
              </a>
            </div>
            {/* Card content */}
            <div className="card-body card-body-cascade text-center">
              {/* Title */}
              <h4 className="card-title"><strong>Billy Coleman</strong></h4>
              {/* Subtitle */}
              <h6 className="font-weight-bold indigo-text py-2">Web developer</h6>
              {/* Text */}
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam.
              </p>
              {/* Facebook */}
              <a type="button" className="btn-floating btn-small btn-fb"><i className="fab fa-facebook-f" /></a>
              {/* Twitter */}
              <a type="button" className="btn-floating btn-small btn-tw"><i className="fab fa-twitter" /></a>
              {/* Google + */}
              <a type="button" className="btn-floating btn-small btn-dribbble"><i className="fab fa-dribbble" /></a>
            </div>
            {/* Card footer */}
            <div className="card-footer text-muted text-center">
              2 days ago
            </div>
          </div>
          {/* Card */}
        </div>
        {/* Card deck */}
      </div>


    )
  }
}

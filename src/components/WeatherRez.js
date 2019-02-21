import React, { Component } from 'react';
import styles from './weatherrez.css';
import PropTypes from 'prop-types';
export default class WeatherRez extends Component {
    saveCityClick(e) {
    e.preventDefault()
        console.log(this.props.weatherCity)
     this.props.saveCity(this.props.weatherCity.name, this.props.weatherCity.temp)
  }
  render(){
    const img = 'http://openweathermap.org/img/w/'+ this.props.weatherCity.icon +'.png'
    return(
          <div className="col s12 m12 margin-top-25">
               <div className="card teal z-depth-5">
                      <div className="card-content white-text">
                          <span className="card-title">Weather in {this.props.weatherCity.name}</span>
                          <div>
                              <span className="flow-text">{this.props.weatherCity.temp}</span>
                              <sup>    &#176; С</sup>
                              <div className="img-weather">
                                  <span className="flow-text">
                                    <img className="responsive-img" src={img}/>
                                  </span>
                              </div>
                              <div className=" "><span className="flow-text">{this.props.weatherCity.description}</span>
                              </div>
                          </div>
                      </div>
                      <div className="card-action">
                          <a onClick={this.saveCityClick.bind(this)}>Save City</a>
                      </div>
               </div>
          </div>
    )
  }
}
WeatherRez.propTypes = {
  saveCity: PropTypes.func,
}

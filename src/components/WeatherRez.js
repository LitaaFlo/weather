import React, { Component } from 'react';
import './weatherrez.css';
export default class WeatherRez extends Component {
    saveCityClick(e) {
        e.preventDefault()
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
                                   <img className="responsive-img" alt="weather-icon" src={img}/>
                               </span>
                           </div>
                           <div><span className="flow-text">{this.props.weatherCity.description}</span></div>
                       </div>
                   </div>
                   <div className="card-action">
                       <div className="save-bth" onClick={this.saveCityClick.bind(this)}>Save City</div>
                   </div>
               </div>
          </div>
    )
  }
}

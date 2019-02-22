import React, { Component } from 'react';
import './searchcity.css'

export default class SearchCity extends Component {
    constructor (props) {
        super(props);
        this.state = {
            city_name: ''
        }
    }
  onYearBtnClick(e) {
    e.preventDefault()
    this.props.addCity(this.state.city_name)
  }
  changeCity(e) {
    this.setState({city_name: e.target.value})
  }

  render(){
    return(
      <form className="col s12">
        <div className="row margin-bottom-0">
          <div className="input-field col s12">
            <input placeholder="City" id="city" type="text" onChange={this.changeCity.bind(this)} className="validate" />
              <label htmlFor="city">Select City</label>
          </div>
        </div>
        <div className="col s12">
         <button className="waves-effect waves-light btn right" type="submit" onClick={this.onYearBtnClick.bind(this)} ><i className="material-icons left">cloud</i>Add</button>
        </div>
      </form>
    )
  }
}


import React, { Component } from 'react';
import SearchCity from './components/SearchCity'
import WeatherRez from './components/WeatherRez'
import SaveCityList from './components/SaveCityList'
import statWeather from './components/StatWeather'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as addCity from './actions/AddCity'

class App extends Component {
    componentDidMount(){
        this.props.pageActions.pickUp()
        this.getCoord( this.props.pageActions)
    }
    getCoord() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.props.pageActions.addCity(null, position.coords.latitude, position.coords.longitude  )
        })

    }
    render() {
        const StatWeather = statWeather();
        const { addCity} = this.props.pageActions
        const { saveCity} = this.props.pageActions
        const { removeCity } = this.props.pageActions
        const { pickUp } = this.props.pageActions
        const { Save } = this.props.pageActions
        const { showSearch } = this.props.pageActions
        return (
            <div className="container">
                {this.props.city.loading
                    ?
                    <div className="row">
                        <div className="col m6 s12">
                            <SearchCity addCity = { addCity }/>
                            <div className="clearfix"/>
                            <WeatherRez weatherCity = {this.props.city} saveCity = { saveCity }  saveLocal = {Save}/>
                            <div className="clearfix"/>
                            <SaveCityList weatherCityList = {this.props.city.cityes} newCities = {this.props.city.newCities} addCity={addCity} remove= {removeCity} getLocal = {pickUp} showSearch = {showSearch}/>
                            <div className="clearfix"/>
                        </div>
                        <div className="col m6 s12">
                            <StatWeather city = {this.props.city} />
                            <div className="clearfix"/>
                        </div>
                    </div>
                    :  <div className="progress">
                        <div className="indeterminate" />
                    </div>
                }

            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        city: state.city
    }
}
function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(addCity, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

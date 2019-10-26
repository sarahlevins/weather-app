import React, { Component } from 'react';
import { CURRENT_WEATHER, HOURLY_FORECAST } from '../data/mockWeather';
import ComplaintPage from '../pages/ComplaintPage';
import WeatherPage from '../pages/WeatherPage';
import { Route } from 'react-router-dom';

const CITIES = ['London', 'Paris', 'Rome', 'Stockholm', 'Sydney', 'Tokyo', 'New York', 'Boston'];

class AppContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            city: CITIES[0],
            temp: CURRENT_WEATHER.main.temp,
            forecast: HOURLY_FORECAST.list
        };

        this.changeCity = this.changeCity.bind(this);
    }

    getRandomCity(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    changeCity() {
        console.log('ckick');
        this.setState({city: this.getRandomCity(CITIES)});
    }

    render () {
        return(
            <>
            
            <Route path ="/"
            component={() =>{
                return(
                <WeatherPage 
                    city = {this.state.city}
                    temp = {this.state.temp}
                    forecast = {this.state.forecast}
                    changeCity = {this.changeCity}
                />
                );
            }}
            exact
            />

            <Route path ="/complain"
            component={() =>{
                return(
                <ComplaintPage
                    city = {this.state.city}
                    temp = {this.state.temp}
                    changeCity = {this.changeCity}
                />
                );
            }}
            />
            </>
        );
    };
}

export default AppContainer;
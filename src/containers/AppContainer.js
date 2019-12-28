import React, { Component } from "react";
import ComplaintPage from "../pages/ComplaintPage";
import WeatherPage from "../pages/WeatherPage";
import { Route } from "react-router-dom";

const CITIES = ["London", "Paris", "Rome", "Milan", "Venice"];
const API_URL = "https://api.openweathermap.org/data/2.5";

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: CITIES[0],
      temp: 0,
      forecast: []
    };

    this.handleChangeCity = this.handleChangeCity.bind(this);
  }

  fetchApiData() {
    fetch(
      `${API_URL}/weather?q=${this.state.city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ temp: parseInt(data.main.temp) });
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  fetchForecast() {
    fetch(
      `${API_URL}/forecast?q=${this.state.city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ forecast: data.list });
      })
      .catch(err => {
        console.error(err);
      });
  }

  getRandomCity(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  handleChangeCity() {
    this.setState({ city: this.getRandomCity(CITIES) }, () => {
      this.fetchApiData();
      this.fetchForecast();
    });
  }

  componentDidMount() {
    this.fetchApiData();
    this.fetchForecast();
  }

  render() {
    return (
      <>
        <Route
          path="/"
          component={() => {
            return (
              <WeatherPage
                city={this.state.city}
                temp={this.state.temp}
                forecast={this.state.forecast}
                changeCity={this.handleChangeCity}
              />
            );
          }}
          exact
        />

        <Route
          path="/complain"
          component={() => {
            return (
              <ComplaintPage
                city={this.state.city}
                temp={this.state.temp}
                changeCity={this.handleChangeCity}
              />
            );
          }}
        />
      </>
    );
  }
}

export default AppContainer;

import React, { useState } from "react";
import "./Weather.css";
import SearchWeather from "./SearchWeather";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

export default function Weather(props) {
  const [weatherObject, setWeatherObject] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherObject({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }
  function search() {
    const apiKey = "07t6o388bfa3865fdeb3c3769c402daf";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherObject.ready) {
    return (
      <div className="Weather-app">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="Search"
                placeholder="Enter the city"
                className="form-control"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="Submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <SearchWeather data={weatherObject} />
        <WeatherForecast city={weatherObject.city} />
      </div>
    );
  } else {
    search();
    return <p>Loading...</p>;
  }
}

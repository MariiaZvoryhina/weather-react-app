import React, { useState } from "react";
import "./Weather.css";
import Sunny from "./images/sunny.png";
import axios from "axios";

export default function Weather(props) {
  const [weatherObject, setWeatherObject] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response);
    setWeatherObject({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Wednesday 17:00",
      description: response.data.weather[0].description,
      iconUrl: "#",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  if (weatherObject.ready) {
    return (
      <div className="Weather-app">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="Search"
                placeholder="Enter the city"
                className="form-control"
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

        <h1>{weatherObject.city}</h1>
        <ul className="description">
          <li>{weatherObject.date}</li>
          <li className="text-capitalize">{weatherObject.description}</li>
        </ul>

        <div className="row mt-3">
          <div className="col-6">
            <div>
              <img src={Sunny} width="64px" alt="sunny" className="icon" />
              <span className="temperature">
                {Math.round(weatherObject.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul className="description">
              <li>Humidity {weatherObject.humidity}%</li>
              <li>Wind {Math.round(weatherObject.wind)}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "646b1f95f4ed88a21044febb5377cc9c";
    let city = "Odesa";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return <p>Loading...</p>;
  }
}

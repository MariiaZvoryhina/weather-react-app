import React from "react";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="Forecast-day"> {day()}</div>
      <div>
        <img
          className="icon-forecast"
          src={props.data.condition.icon_url}
          alt={props.data.condition.description}
        ></img>
      </div>
      <div className="Forecast-temperature">
        <span className="temperature-max"> {maxTemperature()}</span>
        <span className="temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}

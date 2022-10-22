import React from "react";
import "./WeatherForecast.css";
import SearchWeather from "./SearchWeather";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day"> Thu</div>
          {props.data.condition.icon_url}
          <div className="Forecast-temperature">
            <span className="temperature-max">19°</span>
            <span className="temperature-min">15°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

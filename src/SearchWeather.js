import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";

export default function SearchWeather(props) {
  return (
    <div className="SearchWeather">
      <h1>{props.data.city}</h1>
      <ul className="description">
        <li>
          {" "}
          <FormatDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div>
            <div className="icon">
              <WeatherIcon code={props.data.icon} />
            </div>
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul className="description">
            <li>Humidity {props.data.humidity}%</li>
            <li>Wind {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

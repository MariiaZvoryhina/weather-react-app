import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemperature from "./WeatherTemperature";

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
              <img src={props.data.icon} alt={props.data.description}></img>
            </div>

            <WeatherTemperature celsius={props.data.temperature} />
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

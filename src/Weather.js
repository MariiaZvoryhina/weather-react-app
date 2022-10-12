import React from "react";
import "./Weather.css";
import Sunny from "./images/sunny.png";

export default function Weather() {
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

      <h1>Odesa</h1>
      <ul className="description">
        <li>Tuesday 17:00</li>
        <li>Sunny</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img src={Sunny} width="64px" alt="sunny" />
          <span className="temperature">18</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul className="description">
            <li>Precipitation 15%</li>
            <li>Humidity 50%</li>
            <li>Wind 13km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let [city, setCity] = useState("props.defaultCity");
  let [forecast, setForecast] = useState("");

  function showWeather(response) {
    let description = response.data.weather[0].description.split(" ");
    let capitalizedDescription = "";

    description.forEach(function (word) {
      capitalizedDescription +=
        word.charAt(0).toUpperCase() + word.slice(1) + " ";
    });

    setForecast(
      <div className="WeatherResults">
        <h2> {city}</h2>
       
<div class="container-fluid">
        <div class="row">
          <div class="col-xs-6">
            <ul>
              <li>Temperature:{Math.round(response.data.main.temp)}°C</li>
              <li>Description: {capitalizedDescription.trim()}</li>
              <li>
                <img
                  src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
                  alt="{response.description}"
                />
              </li>
            </ul>
          </div>
          <div class="col-xs-6">
            <ul>
              <li> Humidity: {response.data.main.humidity}%</li>
              <li> Wind Speed: {Math.round(response.data.wind.speed)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f3009e4852fa0a079dab291dabf020c4&units=metric`;

    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        {}
        <input className="TypeCity" type="search" placeholder="Type a city" onChange={updateCity} />
        <input className="SearchCity" type="submit" value="Search" />
      </form>
      <div>{forecast}</div>
      <WeatherForecast />
    </div>
  );
}


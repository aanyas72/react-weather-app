import "./App.css";
import utils from "../misc/utils";
import WeatherDay from "./WeatherDay";
import HourlyForecast from "./HourlyForecast";
import formatTime from "./formatTime";
import picture from "./picture";
import Header from "./Header";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [location, setLocation] = useState("Austin");
  const [unit, setUnit] = useState("F");
  const [data, setData] = useState();

  //fetches data from weather API
  useEffect(() => {
    const fetchWeather = async () => {
      const api_key = "9baf61e191861d7ccf27a0c4f53d310e";
      const base_url =
        "https://api.openweathermap.org/data/2.5/forecast?units=imperial&";
      let response = await axios.get(
        `${base_url}q=${location}&appid=${api_key}`
      );
      setData(response.data);
    };
    fetchWeather();
  }, [location]);

  const dayIdsToRender = [0, 8, 16, 24, 32, 40];
  const hourlyIdsToRender = utils.range(0, 8);

  //calculate temperature in celcius
  const calcTemp = (tempInFahrenheit) =>
    Math.round((tempInFahrenheit - 32) * (5 / 9));

  //switch the unit
  const toggleUnit = () => {
    if (unit === "F") {
      setUnit("C");
    } else {
      setUnit("F");
    }
  };

  //array which stores dates for day forecast in 0 and time in 1
  const dateArray = (id) => data.list[dayIdsToRender[id]].dt_txt.split(" ");

  const hourlyArray = (id) =>
    data.list[hourlyIdsToRender[id]].dt_txt.split(" ");

  //format the date
  const dateFormat = (id) => new Date(dateArray(id)[0]).toString();

  return (
    <Router>
      {data === undefined ? (
        ""
      ) : (
        <>
          <Header
            locationName={data.city.name + ", " + data.city.country}
            checkForEnter={(e) => {
              if (e.key === "Enter") {
                setLocation(e.target.value);
              }
            }}
            unit={unit}
            toggleUnit={() => toggleUnit()}
          />

          <Route
            path="/"
            exact
            render={() => (
              <>
                <div className="weather-box">
                  {utils.range(0, 4).map((id) => (
                    <WeatherDay
                      key={id}
                      date={dateFormat(id)}
                      time={formatTime(dateArray(id)[1])}
                      temperature={
                        unit === "F"
                          ? Math.round(data.list[dayIdsToRender[id]].main.temp)
                          : calcTemp(data.list[dayIdsToRender[id]].main.temp)
                      }
                      weather={data.list[dayIdsToRender[id]].weather[0].main}
                      unit={unit}
                      picture={picture(
                        data.list[dayIdsToRender[id]].weather[0].main
                      )}
                    />
                  ))}
                </div>
                <Link to="/hourlyforecast" className="help">
                  Click to view today's hourly forecast
                </Link>
              </>
            )}
          />
          <Route
            path="/hourlyforecast"
            render={() => (
              <>
                <div className="hourly-forecast">
                  {utils.range(0, 8).map((id) => (
                    <HourlyForecast
                      key={id}
                      picture={picture(
                        data.list[hourlyIdsToRender[id]].weather[0].main
                      )}
                      time={formatTime(hourlyArray(id)[1])}
                      weather={data.list[hourlyIdsToRender[id]].weather[0].main}
                      temperature={
                        unit === "F"
                          ? Math.round(
                              data.list[hourlyIdsToRender[id]].main.temp
                            )
                          : calcTemp(data.list[hourlyIdsToRender[id]].main.temp)
                      }
                      unit={unit}
                    />
                  ))}
                </div>
                <Link to="/">Go Back</Link>
              </>
            )}
          />
        </>
      )}
    </Router>
  );
};

export default App;

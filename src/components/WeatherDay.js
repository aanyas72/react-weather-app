import dayFormatter from "./dayFormatter";

const WeatherDay = ({ picture, time, weather, temperature, unit, date }) => (
  <div className="weather-day">
    <div className="day">{dayFormatter(date)}</div>
    <div className="date">{date.substring(4, 10)}</div>
    <div className="time">{time}</div>
    <div className="picture">{picture}</div>
    <div className="temperature">{temperature + "°" + unit}</div>
    <div className="weather">{weather}</div>
  </div>
);

export default WeatherDay;

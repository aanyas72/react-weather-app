const HourlyForecast = ({
  picture,
  time,
  weather,
  temperature,
  unit,
}) => (
  <div className="hr">
    <div className="hourly-time">{time}</div>
    <div className="hourly-picture">{picture}</div>
    <div>{temperature + "°" + unit}</div>
    <div className="weather">{weather}</div>
  </div>
);

export default HourlyForecast;

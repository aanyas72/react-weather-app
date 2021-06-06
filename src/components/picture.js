import {
  WiCloud,
  WiDaySunny,
  WiFog,
  WiHail,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiNa,
} from "react-icons/wi";

//determine which picture to use based on weather
const picture = (weather) => {
  switch (weather) {
    case "Sunny":
    case "Clear":
      return <WiDaySunny />;
    case "Clouds":
      return <WiCloud />;
    case "Fog":
      return <WiFog />;
    case "Hail":
      return <WiHail />;
    case "Rain":
    case "Drizzle":
      return <WiRain />;
    case "Snow":
      return <WiSnow />;
    case "Thunderstorm":
      return <WiThunderstorm />;
    default:
      return <WiNa />;
  }
};

export default picture;

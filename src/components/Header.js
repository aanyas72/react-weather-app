import { Link } from "react-router-dom";

const Header = ({ locationName, unit, toggleUnit, checkForEnter }) => {
  return (
    <>
      <div className="header-wrapper">
        <Link to="/" className="company-name">
          CurrentWeather
        </Link>
        <div className="location">{locationName}</div>
        <input
          className="search-location"
          placeholder="Search by city"
          onKeyPress={(e) => checkForEnter(e)}
        ></input>
        <button className="toggle-button" onClick={toggleUnit}>
          {"°" + unit}
        </button>
      </div>
      <div className="app-title">Weather Forecast</div>
    </>
  );
};

export default Header;

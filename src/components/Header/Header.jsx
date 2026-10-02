import headerLogo from "../../assets/logo.svg";
import userAvatar from "../../assets/user-avatar.png";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { NavLink } from "react-router-dom";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <NavLink to="/">
        <img src={headerLogo} alt="WTWR logo" className="header__logo" />
      </NavLink>
      <p className="header__date-location">
        {currentDate}, {weatherData.city}
      </p>
      <div className="header__button-user-container">
        <ToggleSwitch />
        <button
          onClick={handleAddClick}
          className="header__button"
          type="button"
        >
          + Add clothes
        </button>
        <NavLink className="header__nav-link" to="/profile">
          <div className="header__user-container">
            <p className="header__user-name">Terrence Tegegne</p>
            <img
              src={userAvatar}
              alt="Terrence Tegegne"
              className="header__user-avatar"
            />
          </div>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;

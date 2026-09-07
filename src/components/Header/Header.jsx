import headerLogo from "../../assets/logo.svg";
import userAvatar from "../../assets/user-avatar.png";
import "./Header.css";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img src={headerLogo} alt="WTWR logo" className="header__logo" />
      <p className="header__date-location">
        {currentDate}, {weatherData.city}
      </p>
      <div className="header__button-user-container">
        <button
          onClick={handleAddClick}
          className="header__button"
          type="button"
        >
          + Add clothes
        </button>
        <div className="header__user-container">
          <p className="header__user-name">Terrence Tegegne</p>
          <img
            src={userAvatar}
            alt="Terrence Tegegne"
            className="header__user-avatar"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;

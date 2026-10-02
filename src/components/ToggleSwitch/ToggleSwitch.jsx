import { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch() {
  const { handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext,
  );

  return (
    <label className="toggle-switch">
      <input
        onChange={handleToggleSwitchChange}
        type="checkbox"
        className="toggle-switch__checkbox"
      />
      <div className="toggle-switch__content">
        <span className="toggle-switch__circle"></span>
        <span className="toggle-switch__text toggle-switch__text_f">F</span>
        <span className="toggle-switch__text toggle-switch__text_c">C</span>
      </div>
    </label>
  );
}

export default ToggleSwitch;

import "./SideBar.css";
import userAvatar from "../../assets/user-avatar.png";

function SideBar() {
  return (
    <div className="side-bar">
      <img
        src={userAvatar}
        alt="Terrence Tegegne"
        className="side-bar__user-avatar"
      />
      <p className="side-bar__user-name">Terrence Tegegne</p>
    </div>
  );
}

export default SideBar;

import React from "react";
import SettingsIcon from "./icons/Settings.svg";
import Progress from "./icons/Progress.svg";
import Logging from "./icons/Logging.svg";
import Dashboard from "./icons/Dashboard.svg";
import WellnessPractices from "./icons/WellnessPractices.svg";
import Trends from "./icons/Trends.svg";
import "./SideBarMenu.css";

class SideBarMenu extends React.Component {
  render() {
    return (
      <div className="SideBarMenu">
        <div className="menu-item1">
          <p className="menu-item-label">
            <img src={Dashboard} alt="Dashboard" className="menu-icon" />
              Dashboard</p>
        </div>
        <div className="menu-item2">
          <p className="menu-item-label">
            <img src={Logging} alt="Logging" className="menu-icon" />
            Logging </p>
        </div>
        <div className="menu-item3">
          <p className="menu-item-label">
            <img src={WellnessPractices} alt="Wellness Practices" className="menu-icon" />
            Wellness Practices </p>
        </div>
        <div className="menu-item4">
          <p className="menu-item-label">
            <img src={Trends} alt="Trends" className="menu-icon" />
            Trends </p>
        </div>
        <div className="menu-item5">
          <p className="menu-item-label">
            <img src={Progress} alt="Progress" className="menu-icon" />
            Progress </p>
        </div>
        <div className="menu-item6">
          <p className="menu-item-label">
            <img src={SettingsIcon} alt="Settings" className="menu-icon" />
            Settings </p>
        </div>
      </div>
        )
    }
}

export default SideBarMenu;
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
            <a href ="/landing">Dashboard</a>
          </p>
        </div>
        <div className="menu-item2">
          <p className="menu-item-label">
            <img src={Logging} alt="Logging" className="menu-icon" />
            <a href ="/landing">Logging</a> 
          </p>
        </div>
        <div className="menu-item3">
          <p className="menu-item-label">
            <img src={WellnessPractices} alt="Wellness Practices" className="menu-icon" />
            <a href ="/landing/goals">Wellness Practices</a> 
          </p>
        </div>
        <div className="menu-item4">
          <p className="menu-item-label">
            <img src={Trends} alt="Trends" className="menu-icon" />
            <a href ="/landing">Trends</a> 
          </p>
        </div>
        <div className="menu-item5">
          <p className="menu-item-label">
            <img src={Progress} alt="Progress" className="menu-icon" />
            <a href ="/landing">Progress</a> 
          </p>
        </div>
        <div className="menu-item6">
          <p className="menu-item-label">
            <img src={SettingsIcon} alt="Settings" className="menu-icon" />
            <a href ="/landing">Settings</a> 
          </p>
        </div>
      </div>
        )
    }
}

export default SideBarMenu;
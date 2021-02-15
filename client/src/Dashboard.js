import React from "react";
import styled from "styled-components";
import SideBarMenu from "./components/SideBarMenu";
import DashBoardHeader from "./components/DashboardHeader";
import MoodPanel from "./components/MoodPanel";
import "./Dashboard.css";
import WellnessPracticesPanel from "./components/WellnessPracticesPanel";

const LabelPanel = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
      "WPLabel TrackingLabel";
  grid-area: 7 / 2 / 8 / 8; 
`;

const WellnessPracticesLabel = styled.label`
  grid-area: WPLabel; 
  color: #848496;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.05em;
  margin-top: auto;
  margin-bottom: auto;
`;

const TrackingLabel = styled.label`
  grid-area: TrackingLabel;
  color: #848496;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.05em;
  margin-top: auto;
  margin-bottom: auto;
`;

class Dashboard extends React.Component {
  render() {
    return (
      <div class="grid-container">
        <DashBoardHeader />
        <div class="welcome-panel">Welcome, Emily</div>
        <div class="Sidebar">
          <SideBarMenu />
        </div>
        <div class="padding"></div>
        <div class="mood-prompt">How are you today? <span className="italic">Select mood.</span></div>
        <MoodPanel />
        <div class="padding2"></div>
        <LabelPanel>
          <TrackingLabel>Moods This Month</TrackingLabel>
          <WellnessPracticesLabel>Your Wellness Practices</WellnessPracticesLabel>
        </LabelPanel>
        <div class="padding4"></div>
        <WellnessPracticesPanel />
        <div class="tracking-panel"></div>
        <div class="RightPadding"></div>
      </div>
    );
  }
}

export default Dashboard;
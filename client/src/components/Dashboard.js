import React from "react";
import styled from "styled-components";
import MoodPanel from "./MoodPanel";
import "./Dashboard.css";
import WellnessPracticesPanel from "./WellnessPracticesPanel";

const Container = styled.div`
  grid-area: 6 / 5 / 9 / 8;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 1fr 0.14fr;
  grid-template-areas:
      "TrackingLabel"
      "TrackingPanelWrapper"
      ".";
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

const TrackingPanelWrapper = styled.div`
  grid-area: TrackingPanelWrapper;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1.2fr 0.2fr;
  gap: 0px 0px;
  grid-template-areas:
      "TrackingPanel"
      "TrackingPanelPadding";
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
`;

class Dashboard extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <div className="welcome-panel">Welcome, Emily</div>
        <div className="padding"></div>
        <div className="mood-prompt">How are you today? <span className="italic">Select mood.</span></div>
        <MoodPanel />
        <div className="padding2"></div>
        <WellnessPracticesPanel />
        <Container>
          <TrackingLabel>Moods This Month</TrackingLabel>
          <TrackingPanelWrapper></TrackingPanelWrapper>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
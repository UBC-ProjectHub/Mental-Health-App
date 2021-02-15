import React from "react";
import styled from "styled-components";
import MovementIcon from "./icons/movement.svg";
import SleepIcon from "./icons/sleep.svg";
import GratefulnessIcon from "./icons/gratefulness.svg";
import MindfulEatingIcon from "./icons/mindfuleating.svg";

const Container = styled.div`
  grid-area: 6 / 1 / 9 / 4;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 1fr 0.14fr;
  grid-template-areas:
      "WellnessPracticesLabel"
      "WellnessPracticesWrapper"
      "LogButtonArea";
`

const WellnessPracticesLabel = styled.label`
  grid-area: WellnessPracticesLabel;
  color: #848496;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.05em;
  margin-top: auto;
  margin-bottom: auto;
`;

const WellnessPracticesWrapper = styled.div`
    grid-area: WellnessPracticesWrapper;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 15px 15px;
    grid-template-areas:
        "Movement Sleep"
        "Gratefulness MindfulEating"
`;

const MovementPanel = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  grid-template-rows: 1fr;
  gap: 0px 12px;
  grid-template-areas:
    "MovementIcon MovementStats";
  grid-area: Movement;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
`;

const MovementIconPanel = styled.div`
  grid-area: MovementIcon;
  height: 90px;
  margin: auto;
  padding-bottom: 10px;
`;

const SleepPanel = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  grid-template-rows: 1fr;
  gap: 0px 12px;
  grid-template-areas:
    "SleepIcon SleepStats";
    grid-area: Sleep;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);  
  border-radius: 10px;
`;

const SleepIconPanel = styled.div`
  grid-area: SleepIcon;
  height: 90px;
  margin: auto;
  padding-bottom: 10px;
`;

const GratefulnessPanel = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  grid-template-rows: 1fr;
  gap: 0px 12px;
  grid-template-areas:
    "GratefulnessIcon GratefulStats";
  grid-area: Gratefulness;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
`;

const GratefulnessIconPanel = styled.div`
  grid-area: GratefulnessIcon;
  height: 90px;
  margin: auto;
  padding-bottom: 10px;
`;

const MindfulEatingPanel = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  grid-template-rows: 1fr;
  gap: 0px 12px;
  grid-template-areas:
    "MindfulEatingIcon MindfulEatingStats";
  grid-area: MindfulEating;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
`;

const MindfulEatingIconPanel = styled.div`
  grid-area: MindfulEatingIcon;
  height: 90px;
  margin: auto;
  padding-bottom: 10px;
`;

const LogButtonArea = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 1.35fr;
  gap: 0px 0px;
  grid-template-areas:
      "."
      "LogButtonPanel"
      ".";
  grid-area: LogButtonArea;
`;

const LogButtonPanel = styled.div`
  grid-area: LogButtonPanel;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
`;

const LogButton = styled.button`
  color: white;
  background: #9296FF;
  border-radius: 5px;
  box-shadow: 1px 4px 20px rgba(224, 224, 224, 0.88);
  margin-left: auto;
  margin-right: auto;
  padding-left: 70px;
  padding-right: 70px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  align-items: center;
  text-align: center;
  border: none;
`;

function WellnessPracticesPanel() {
    return (
      <Container>
        <WellnessPracticesLabel>Your Wellness Practices</WellnessPracticesLabel>
        <WellnessPracticesWrapper>
            <MovementPanel>
                <MovementIconPanel>
                    <img src={MovementIcon} alt="Movement" style={{ height: `100%`, 'object-fit': `contain`, 'padding-top': '8px', 'padding-bottom': '8px'}} />
                </MovementIconPanel>
            </MovementPanel>
            <SleepPanel>
                <SleepIconPanel>
                    <img src={SleepIcon} alt="Sleep" style={{ height: `100%`, 'object-fit': `contain`, 'padding-top': '8px', 'padding-bottom': '8px'}} />
                </SleepIconPanel>

            </SleepPanel>
            <GratefulnessPanel>
                <GratefulnessIconPanel>
                    <img src={GratefulnessIcon} alt="Gratefulness" style={{ height: `100%`, 'object-fit': `contain`, 'padding-top': '8px', 'padding-bottom': '8px'}} />
                </GratefulnessIconPanel>
            </GratefulnessPanel>
            <MindfulEatingPanel>
                <MindfulEatingIconPanel>
                    <img src={MindfulEatingIcon} alt="Mindful eating" style={{ height: `100%`, 'object-fit': `contain`, 'padding-top': '8px', 'padding-bottom': '8px'}} />
                </MindfulEatingIconPanel>
            </MindfulEatingPanel>
        </WellnessPracticesWrapper>
        <LogButtonArea>
                <LogButtonPanel>
                    <LogButton>Log Your Wellness Practices</LogButton>
                </LogButtonPanel>
            </LogButtonArea>
      </Container>
    )
}

export default WellnessPracticesPanel
import React from "react";
import styled from "styled-components";
import ExcitedIcon from "./icons/excited.svg";
import HappyIcon from "./icons/happy.svg";
import AnxiousIcon from "./icons/anxious.svg";
import UpsetIcon from "./icons/upset.svg";
import GratefulIcon from "./icons/grateful.svg";
import TiredIcon from "./icons/tired.svg";

const MoodPanelWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas:
        "HappyPanel ExcitedPanel AnxiousPanel TiredPanel UpsetPanel GratefulPanel";
    grid-area: 5 / 2 / 6 / 8;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
`;

const HappyPanel = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1.4fr 0.2fr 0.2fr;
    gap: 0px 0px;
    grid-template-areas:
        "."
        "."
        ".";
    grid-area: HappyPanel;
    margin-left: auto;
    margin-right: auto;
    padding-left: 62px;
    padding-right: 62px;
    padding-top: 10px;
`;

const ExcitedPanel = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1.4fr 0.2fr 0.2fr;
    gap: 0px 0px;
    grid-template-areas:
        "."
        "."
        ".";
    grid-area: ExcitedPanel;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding-left: 62px;
    padding-right: 62px;
    padding-top: 10px;
`;

const AnxiousPanel = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1.4fr 0.2fr 0.2fr;
    gap: 0px 0px;
    grid-template-areas:
        "."
        "."
        ".";
    grid-area: AnxiousPanel;
    margin-left: auto;
    margin-right: auto;
    padding-left: 62px;
    padding-right: 62px;
    padding-top: 10px;
`;

const TiredPanel = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1.4fr 0.2fr 0.2fr;
    gap: 0px 0px;
    grid-template-areas:
        "."
        "."
        ".";
    grid-area: TiredPanel;
    margin-left: auto;
    margin-right: auto;
    padding-left: 62px;
    padding-right: 62px;
    padding-top: 10px;
`;

const UpsetPanel = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1.4fr 0.2fr 0.2fr;
    gap: 0px 0px;
    grid-template-areas:
        "."
        "."
        ".";
    grid-area: UpsetPanel;
    margin-left: auto;
    margin-right: auto;
    padding-left: 62px;
    padding-right: 62px;
    padding-top: 10px;
`;

const GratefulPanel = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1.4fr 0.2fr 0.2fr;
    gap: 0px 0px;
    grid-template-areas:
        "."
        "."
        ".";
    grid-area: GratefulPanel;
    margin-left: auto;
    margin-right: auto;
    padding-left: 62px;
    padding-right: 62px;
    padding-top: 10px;
`;

const MoodLabel = styled.label`
    text-align: center;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.05em;
    color: #848496;
`;

function MoodPanel() {
    return (
        <MoodPanelWrapper>
            <HappyPanel>
                <img src={HappyIcon} alt="happy" className="mood-icon" />
                <MoodLabel>Happy</MoodLabel>
            </HappyPanel>
            <ExcitedPanel>
                <img src={ExcitedIcon} alt="excited" className="mood-icon" />
                <MoodLabel>Excited</MoodLabel>
            </ExcitedPanel>
            <AnxiousPanel>
                <img src={AnxiousIcon} alt="anxious" className="mood-icon" />
                <MoodLabel>Anxious</MoodLabel>
            </AnxiousPanel>
            <TiredPanel>
                <img src={TiredIcon} alt="tired" className="mood-icon" />
                <MoodLabel>Tired</MoodLabel>
            </TiredPanel>
            <UpsetPanel>
                <img src={UpsetIcon} alt="upset" className="mood-icon" />
                <MoodLabel>Upset</MoodLabel>
            </UpsetPanel>
            <GratefulPanel>
                <img src={GratefulIcon} alt="grateful" className="mood-icon" />
                <MoodLabel>Grateful</MoodLabel>
            </GratefulPanel>
        </MoodPanelWrapper>
    )
}

export default MoodPanel
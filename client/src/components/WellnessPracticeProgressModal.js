import styled from "styled-components";
import React from "react";
import { Route, withRouter } from "react-router-dom";
import WellnessCard from "./WellnessCard";
import images from "./images";

const WellnessCardContainer = styled.div`
  width: 400px;
  height: 180px;
  padding: 50px;
  margin: 20px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
`;

const WellnessText = styled.div`
  width: 240px;
  height: 100px;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;

const WellnessHeader = styled.header`
  color: #222222;
  font-size: 15px;
`;

const GoalText = styled.header`
  color: #ff8ba0;
  font-size: 15px;
`;

const ProgressText = styled.header`
  color: #9296ff;
  font-size: 15px;
`;

const WellnessPracticeContainer = styled.div`
  height: 100%fit-content;
  min-height: 550px;
  width: 100%;
  display: flex;
  flex-grow: 1;
  max-width: 2000px;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const WellnessImage = styled.img`
  width: 93px;
  height: 104px;
  display: flex;
  margin: 20px;
`;

class WellnessPracticeProgressModal extends React.Component {
  render() {
    return (
      <WellnessPracticeContainer>
        <WellnessCardContainer>
          <WellnessImage src={images.movement}></WellnessImage>
          <WellnessText>
            <WellnessHeader>Movement</WellnessHeader>
            <GoalText>Log movement 7 days per week</GoalText>
            <ProgressText>80% Days logged</ProgressText>
          </WellnessText>
        </WellnessCardContainer>
        <WellnessCardContainer>
          <WellnessImage src={images.grateful}></WellnessImage>
          <WellnessText>
            <WellnessHeader>Gratefulness</WellnessHeader>
            <GoalText>Log gratefulness 7 days per week</GoalText>
            <ProgressText>95% Days logged</ProgressText>
          </WellnessText>
        </WellnessCardContainer>
        <WellnessCardContainer>
          <WellnessImage src={images.mindfulEating}></WellnessImage>
          <WellnessText>
            <WellnessHeader>Mindful Eating</WellnessHeader>
            <GoalText>Log meals 5 days per week</GoalText>
            <ProgressText>73% Days logged</ProgressText>
          </WellnessText>
        </WellnessCardContainer>
        <WellnessCardContainer>
          <WellnessImage src={images.sleep}></WellnessImage>
          <WellnessText>
            <WellnessHeader>Sleep</WellnessHeader>
            <GoalText>Sleep 7 hours per night</GoalText>
            <ProgressText>6.5 hours average</ProgressText>
          </WellnessText>
        </WellnessCardContainer>
      </WellnessPracticeContainer>
    );
  }
}

export default withRouter(WellnessPracticeProgressModal);

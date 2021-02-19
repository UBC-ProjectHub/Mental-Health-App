import styled from "styled-components";
import React from "react";
import { Route, withRouter } from "react-router-dom";
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
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const WellnessHeader = styled.header`
  color: #222222;
  font-size: 15px;
  font-weight: normal;
`;

const GoalText = styled.header`
  color: #ff8ba0;
  font-size: 12px;
  font-weight: normal;
`;

const ProgressText = styled.header`
  color: #9296ff;
  font-size: 12px;
  font-weight: normal;
`;

const WellnessImage = styled.img`
  width: 93px;
  height: 104px;
  display: flex;
  margin: 20px;
`;

class WellnessCard extends React.Component {
  render() {
    return (
      <WellnessCardContainer>
        <WellnessImage></WellnessImage>
        <WellnessText>
          <WellnessHeader>Movement</WellnessHeader>
          <GoalText>Log movement 7 days per week</GoalText>
          <ProgressText>80% Days logged</ProgressText>
        </WellnessText>
      </WellnessCardContainer>
    );
  }
}

export default withRouter(WellnessCard);

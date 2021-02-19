import styled from "styled-components";
import React from "react";
import { Route, withRouter } from "react-router-dom";

const TopBarContainer = styled.div`
  height: 68px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  flex-grow: 1;
`;

const TopBarButton = styled.button`
  background-color: #fdfdff;
  color: #848496;
  text-align: center;
  border-radius: 5px;
  padding: 7px 25px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;

  &:hover {
    background: #ebedff;
  }

  &:active {
    background: #ebedff;
  }
`;

class TopBarMenu extends React.Component {
  render() {
    return (
      <TopBarContainer>
        <TopBarButton>Summary</TopBarButton>
        <TopBarButton>Movement</TopBarButton>
        <TopBarButton>Food</TopBarButton>
        <TopBarButton>Gratefulness</TopBarButton>
        <TopBarButton>Sleep</TopBarButton>
      </TopBarContainer>
    );
  }
}

export default withRouter(TopBarMenu);

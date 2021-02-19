import styled from "styled-components";
import React from "react";
import { Route, withRouter } from "react-router-dom";

//Parent Container of Panel Column and SideBar Column
const BackgroundContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fdfdff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
`;

export default BackgroundContainer;

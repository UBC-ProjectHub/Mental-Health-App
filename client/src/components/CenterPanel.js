import styled from "styled-components";
import React from "react";
import { Route, withRouter } from "react-router-dom";

//Child of Background Container
//Parent of HeaderContainer and Card Container
const CenterPanel = styled.div`
  height: 100%;
  background-color: transparent;
  flex-direction: column;
  flex-grow: 1;
`;

export default CenterPanel;

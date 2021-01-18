import styled from "styled-components";
import React, { Component } from "react";
import * as colors from "./colors";
import axios from "axios";
import { withRouter } from "react-router-dom";

const Wrapper = styled.div`
  flex-direction: row;
  display: flex;
  height: 100vh;
`;

const LeftPane = styled.div`
  height: 100%;
  width: 50%;
  background: linear-gradient(
    151.45deg,
    rgba(146, 150, 255, 1) 4.23%,
    rgba(205, 207, 254, 1) 57.67%
  );
  align-items: center;
  justify-content: center;
  display: flex;
`;

const WomanMeditating = styled.img`
  max-width: 100%;
`;

class Logout extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios
      .get("/logout")
      .then(function (response) {
        console.log(response);
        this.props.history.push("/login");
      })
      .catch(function (error) {
        console.log(error);
        this.props.history.push("/login");
      });
  }
  render() {
    return <Wrapper>Logging you out</Wrapper>;
  }
}

export default withRouter(Logout);

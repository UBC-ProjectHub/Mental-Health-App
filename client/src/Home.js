import styled from "styled-components";
import React, { Component } from "react";
import * as colors from "./colors";
import axios from "axios";

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

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
    };

    this.renderWelcomeMessage = this.renderWelcomeMessage.bind(this);
  }

  componentWillMount() {
    axios
      .get("/me")
      .then((response) => {
        console.log(response.data);
        this.setState({ user: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  renderWelcomeMessage() {
    if (this.state.user) {
      return "Welcome, " + this.state.user.firstName;
    }
    return (
      <div>
        You're not currently logged in. <a href="/login">Log In</a>
      </div>
    );
  }
  render() {
    return <Wrapper>{this.renderWelcomeMessage()}</Wrapper>;
  }
}

export default Home;

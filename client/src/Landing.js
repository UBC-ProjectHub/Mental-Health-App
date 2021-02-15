import React from "react";
import styled from "styled-components";
import SideBarMenu from "./components/SideBarMenu";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard"
import Goals from "./components/Goals"
import { Route, Switch } from "react-router-dom";

const Container = styled.div`
    overflow: scroll;
    display: grid;
`;

const ContentContainer = styled.div`
    padding: 36px
`;

const SidebarContainer = styled.div`
    grid-area: 2 / 1 / 11 / 2;
`;

class Landing extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <SidebarContainer> <SideBarMenu /> </SidebarContainer>
        <ContentContainer>
          <Switch>
              <Route exact path='/landing' component={Dashboard} />
              <Route exact path='/landing/goals' component={Goals} />
          </Switch>
        </ContentContainer>
      </Container>
    );
  }
}

export default Landing;
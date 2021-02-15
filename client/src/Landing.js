import React from "react";
import styled from "styled-components";
import SideBarMenu from "./components/SideBarMenu";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard"
import Goals from "./components/Goals"
import { Route, Switch } from "react-router-dom";

const Container = styled.div`
    display: grid;
    grid-template-rows: 0.1fr 1fr;
    grid-template-columns: 0.3fr 2.7fr;
    grid-template-areas: 
        "Header" "Header"
        "Sidebar" "Content";
    padding-right: 15px;
`;

const ContentContainer = styled.div`
    grid-area: 2 / 2 / 3 / 3;
    height: 840px;
    overflow: hidden;
`;

const SidebarContainer = styled.div`
    grid-area: 2 / 1 / 3 / 2;
    padding-right: 40px;
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
import styled from "styled-components";
import React from "react";
import { Route, withRouter } from "react-router-dom";
import SideBarMenuFlex from "./components/SideBarMenuFlex";
import NavBarFlex from "./components/NavBarFlex";
import WellnessPracticeProgressModal from "./components/WellnessPracticeProgressModal";
import TopBarMenu from "./components/TopBarMenu";
import CenterPanel from "./components/CenterPanel";
import BackgroundContainer from "./components/BackgroundContainer";
import ContentCard from "./components/ContentCard";

class Progress extends React.Component {
  render() {
    return (
      <BackgroundContainer>
        <SideBarMenuFlex></SideBarMenuFlex>
        <CenterPanel>
          <NavBarFlex>
            <TopBarMenu></TopBarMenu>
          </NavBarFlex>
          <ContentCard>
            <WellnessPracticeProgressModal></WellnessPracticeProgressModal>
          </ContentCard>
        </CenterPanel>
      </BackgroundContainer>
    );
  }
}

export default Progress;

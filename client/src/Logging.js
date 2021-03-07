import React from "react";
import SideBarMenuFlex from "./components/SideBarMenuFlex";
import NavBarFlex from "./components/NavBarFlex";
import TopBarMenu from "./components/TopBarMenu";
import CenterPanel from "./components/CenterPanel";
import BackgroundContainer from "./components/BackgroundContainer";
import ContentCard from "./components/ContentCard";
import LoggingPractices from "./components/LoggingPractices";

class Logging extends React.Component {
  render() {
    return (
      <BackgroundContainer>
        <SideBarMenuFlex></SideBarMenuFlex>
        <CenterPanel>
          <NavBarFlex>
            <TopBarMenu></TopBarMenu>
          </NavBarFlex>
          <ContentCard>
            <LoggingPractices></LoggingPractices>
          </ContentCard>
        </CenterPanel>
      </BackgroundContainer>
    );
  }
}

export default Logging;

import styled from "styled-components";
import React from "react";
import { Route, withRouter } from "react-router-dom";
import images from "./images";

//Child of Background Container
//Parent of SideBarMenuContainer
const SideBarColumn = styled.div`
  height: 100%;
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

//Child of SideBar Column
//Parent of Menu Items
const SideBarMenuContainer = styled.div`
  height: 350px;
  width: 200px;
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

//Child of SideBar Menu Container
//Parent of Menu Button
const MenuItem = styled.div`
  height: 35px;
  width: 100%;
  padding: 10px 20px;
  display: flex;
  background-color: transparent;
  color: #848496;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const MenuImage = styled.img`
  height: 16px;
  width: 16px;
`;

//Child of Menu
const MenuButton = styled.button`
  background-color: transparent;
  color: #848496;
  text-align: center;
  padding: 7px 15px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;

  &:hover {
    color: #6268ff;
  }

  &:active {
    color: #6268ff;
  }
`;

class SideBarMenuFlex extends React.Component {
  render() {
    return (
      <SideBarColumn>
        <SideBarMenuContainer>
          <MenuItem>
            <MenuImage src={images.dashboard}></MenuImage>
            <MenuButton>Dashboard</MenuButton>
          </MenuItem>
          <MenuItem>
            <MenuImage src={images.logging}></MenuImage>
            <MenuButton>Logging</MenuButton>
          </MenuItem>
          <MenuItem>
            <MenuImage src={images.wellnessPractices}></MenuImage>
            <MenuButton>Wellness Practices</MenuButton>
          </MenuItem>
          <MenuItem>
            <MenuImage src={images.trends}></MenuImage>
            <MenuButton>Trends</MenuButton>
          </MenuItem>
          <MenuItem>
            <MenuImage src={images.progress}></MenuImage>
            <MenuButton>Progress</MenuButton>
          </MenuItem>
          <MenuItem>
            <MenuImage src={images.settings}></MenuImage>
            <MenuButton>Settings</MenuButton>
          </MenuItem>
        </SideBarMenuContainer>
      </SideBarColumn>
    );
  }
}

export default withRouter(SideBarMenuFlex);

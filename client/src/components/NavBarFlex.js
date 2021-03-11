import styled from "styled-components";
import React from "react";
import { Route, withRouter } from "react-router-dom";
import images from "./images";
import PageTitle from "./PageTitle";

//Child of Panel Column
//Parent of NavBarContainder
const HeaderContainer = styled.div`
  width: 100%;
  background-color: transparent;
  box-sizing: border-box;
`;

//Child of Header Container
const NavBarContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: transparent;
  flex-grow: 1;
`;

//Child of NavBar Container
const SearchFieldContainer = styled.div`
  width: 200px;
  height: 30px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchFieldInput = styled.input`
  width: 180px;
  height: 20px;
  background-color: transparent;
  outline: none;
  border: none;
  background-image: "./icons/searchicon.svg";
  display: flex;
`;

const UserProfileDropdown = styled.select`
  width: 140px;
  height: 35px;
  background-color: transparent;
  outline: none;
  border: none;
  color: #848496;
  font-size: 15px;
  padding-right: 5px;
  margin-left: 2px;
  margin-right: 10px;
  text-align: center;
`;

const UserImageContainer = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

const UserImage = styled.img`
  width: 35;
  height: 35;
  display: flex;
  margin-left: 25px;
`;

class NavBarFlex extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <NavBarContainer>
          <SearchFieldContainer>
            <SearchFieldInput></SearchFieldInput>
          </SearchFieldContainer>
          <UserImage src={images.profilePic}></UserImage>
          <UserProfileDropdown>
            <option>Emily Andrews</option>
            <option>Log Out</option>
          </UserProfileDropdown>
        </NavBarContainer>
        <PageTitle></PageTitle>
        {this.props.children}
      </HeaderContainer>
    );
  }
}

export default withRouter(NavBarFlex);

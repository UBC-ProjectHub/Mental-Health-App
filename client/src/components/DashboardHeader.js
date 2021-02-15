import styled from "styled-components";
import React from "react";
import ProfilePic from "./icons/emilyprofilepic.png";
import SearchIcon from "./icons/searchicon.svg";
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

const ProfileBar = styled.div`
display: grid;
grid-template-columns: 0.3fr 0.8fr 0.4fr;
grid-template-rows: 1fr;
gap: 0px 0px;
grid-template-areas: "Photo Name DropDownButton";
margin-top: 0px;
padding-top: 0px;
color: #848496;
`;

const ProfileName = styled.label`
margin-top: auto;
margin-bottom: auto;
width: fit-content;
padding-left: 5px;
font-weight: 500;
color: #848496;
`;

const SearchWrapper = styled.div`
display: grid;
grid-template-columns: 0.2fr 1.1fr;
grid-template-rows: 1fr;
gap: 0px 0px;
grid-template-areas: "Icon SearchField";
height: 1.6em;
margin: 10% 12%;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
border-radius: 10px;
`;

const SearchBar = styled.input`
grid-area: SearchField;
margin-top: auto;
margin-bottom: auto;
font-size: 14px;
width: 95%;
height: 1.6em;
border: none;
`;

class DashBoardHeader extends React.Component {
    render() {
        return (
            <div class="Header">
                <div class="Padding"></div>
                <div class="Padding"></div>
                <div class="Padding"></div>
                <div class="Padding"></div>
                <SearchWrapper>
                    <img src={SearchIcon} style={{
                        'grid-area': 'Icon', height: '55%',
                        'margin-top': '6px',
                        'margin-left': '5px', 'padding-left': '3px'
                    }} />
                    <SearchBar />
                </SearchWrapper>
                <ProfileBar>
                    <img src={ProfilePic} style={{
                        'margin-top': 'auto',
                        'margin-bottom': 'auto'
                    }} />
                    <ProfileName>Emily Andrews</ProfileName>
                    <div style={{
                        'grid-area': 'DropDownButton',
                        'margin-top': 'auto', 'margin-bottom': 'auto'
                    }}>
                        {[DropdownButton].map((DropdownType, idx) => (
                            <DropdownType
                                as={ButtonGroup}
                                key={idx}
                                id={`dropdown-button-drop-${idx}`}
                                size="sm"
                                variant="secondary"
                                background-colour='white'
                                title='dropdown'
                            >
                                <Dropdown.Item eventKey="1">
                                    <a href="/login">Log Out</a>
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="2">
                                    <a href="/dashboard">Settings</a>
                                </Dropdown.Item>
                            </DropdownType>
                        ))}
                    </div>
                </ProfileBar>
            </div>
        )
    }
}

export default DashBoardHeader
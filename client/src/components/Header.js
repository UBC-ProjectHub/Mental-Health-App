import styled from "styled-components";
import React from "react";
import ProfilePic from "./icons/emilyprofilepic.png";
import SearchIcon from "./icons/searchicon.svg";
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import SelectDropdown from "./SelectDropdown";

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

const StyledHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas:"Padding Padding Padding Padding Search Profile";
    grid-area: 1 / 1 / 2 / 3;
`;

class Header extends React.Component {
    render() {
        return (
            <StyledHeader>
                <div className="Padding"></div>
                <div className="Padding"></div>
                <div className="Padding"></div>
                <div className="Padding"></div>
                <SearchWrapper>
                    <img src={SearchIcon} style={{
                        'gridArea': 'Icon', height: '55%',
                        'marginTop': '6px',
                        'marginLeft': '5px', 'paddingLeft': '3px'
                    }} />
                    <SearchBar />
                </SearchWrapper>
                <ProfileBar>
                    <img src={ProfilePic} style={{
                        'marginTop': 'auto',
                        'marginBottom': 'auto'
                    }} />
                    <ProfileName>Emily Andrews</ProfileName>
                    <div style={{
                        'gridArea': 'DropDownButton',
                        'marginTop': 'auto', 'marginBottom': 'auto'
                    }}>
                        {[DropdownButton].map((DropdownType, idx) => (
                            <DropdownType
                                as={ButtonGroup}
                                key={idx}
                                id={`dropdown-button-drop-${idx}`}
                                size="sm"
                                variant="secondary"
                                background-colour='white'
                            >
                                <Dropdown.Item eventKey="1">Log Out</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Settings</Dropdown.Item>
                            </DropdownType>
                        ))}
                    </div>
                </ProfileBar>
            </StyledHeader>
        )
    }
}

export default Header
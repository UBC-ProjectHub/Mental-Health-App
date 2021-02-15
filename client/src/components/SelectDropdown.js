import styled from "styled-components";
import React from "react";

const fakeData = [
    "Sleep",
    "Food",
    "Movement",
    "Gratefulness"
]

const SelectWrapper = styled.div``;

const FormLabel = styled.label`
    font-size: 15px;
    line-height: 18px;
    color: #848496;
    display: block;
    margin-bottom: 12px;
`

const Dropdown = styled.select`
    display: block;
    height: 40px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 5px;
    width: 100%;
    padding: 0px 10px 0px 10px;
    margin-bottom: 12px;
`

const DropdownOption = styled.option``;


class SelectDropdown extends React.Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };
    render() {
        return (
            <SelectWrapper>
                    { this.props.label ? <FormLabel>{this.props.label}</FormLabel> : null }
                    <Dropdown>
                    {Object.values(this.props.data).map((value, index) => {
                        return (
                            <DropdownOption value={value}>{value}</DropdownOption>
                        );
                    })}
                    </Dropdown>
            </SelectWrapper>
        );
    }
}

export default SelectDropdown;
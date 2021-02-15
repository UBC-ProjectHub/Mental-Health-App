import styled from "styled-components";
import React from "react";
import SelectDropdown from "./SelectDropdown";

const fakeData = [
    "Sleep",
    "Food",
    "Movement",
    "Gratefulness"
]


const Container = styled.div`
    background-color: white;
    position: relative;
`

const StyledHeader = styled.h2`
    margin-top: 0;
`

const StyledForm = styled.form``;

const FormField = styled.div``;

const FormLabel = styled.label`
    font-size: 15px;
    line-height: 18px;
    color: #848496;
    display: block;
    margin-bottom: 12px;
`

const Button = styled.button`
    background: ${props => props.primary ? "#43D48F" : "#FF6984"};
    border: none;
    border-radius: 5px;
    margin-right: 32px;
    height: 30px;
    font-weight: bold;
    font-size: 15px;
    color: #FFFFFF;
    padding: 0px 24px;
    width: fit-content;
`

class AddEditGoalForm extends React.Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };
    render() {
        return (
            <Container>
                <StyledHeader>Add New Wellness Practice</StyledHeader>
                <StyledForm onSubmit={this.handleSubmit}>
                    <FormField>
                        <SelectDropdown data={fakeData} label="Select Wellness Area" ></SelectDropdown>
                    </FormField>
                    <FormField>
                            <FormLabel>Customize Wellness Practice</FormLabel>
                            <SelectDropdown data={fakeData} label="" ></SelectDropdown>
                            <SelectDropdown data={fakeData} label="" ></SelectDropdown>
                            <SelectDropdown data={fakeData} label="" ></SelectDropdown>
                    </FormField>
                    <div style={{marginTop:"32px"}}>
                        <Button primary onClick={e => {this.onClose(e);}}>Add Wellness Practice</Button>
                        <Button onClick={e => {this.onClose(e);}}>Cancel</Button>
                    </div>
                </StyledForm>
            </Container>
        );
    }
}

export default AddEditGoalForm;
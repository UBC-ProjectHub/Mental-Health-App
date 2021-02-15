import styled from "styled-components";
import React from "react";
import AddEditGoalModal from './AddEditGoalForm'
import Modal from './Modal'

const fakeData = [
    {
        name: 'Log Meals 7 Days a Week',
        date: 'January 1, 2020',
        trends: '+10%'
    }
]

const Wrapper = styled.div`
    box-sizing: border-box;
    display: grid;
    grid-area: 1 / 1 / 10 / 8;
    grid-template-rows: 0fr;
`;


const Heading = styled.div`
    position: static;
    display: flex;
    justify-content: space-between;
    left: 0;
    right: 0;
    margin-bottom: 24px;
`

const Title = styled.div`
    padding: 5px;
    font-weight: bold;
    font-size: 20px;
    color: #848496;
`

const Button = styled.button`
    background: ${props => props.primary ? "#43D48F" : props.secondary ? "#9296FF" : "#FF6984"};
    border: none;
    border-radius: 5px;
    margin-left: 10px;
    height: 30px;
    width: 90px;
    font-weight: bold;
    font-size: 15px;
    color: #FFFFFF;
`

const Table = styled.table`
    border-collapse: collapse;
    border-spacing: 0;
    left: 0;
    right: 0;
    border-radius: 10px;
    table-layout: fixed;
`;

const TableHeader = styled.thead`
    background: #EBEDFF;
    {
        th:first-child {
            border-top-left-radius: 10px;
        }

        th:last-child {
            border-top-right-radius: 10px;
        }
    }
`

const TableHeadCell = styled.th`
    flex: none;
    flex-grow: 0;
    padding: 10px 32px;
    border: none !important;
    text-align: left;
    font-weight: normal;
    color: #828282;
`

const TableBody = styled.tbody`
`

const TableRow = styled.tr`
    border-bottom: 2px solid #F2F2F2;
`

const TableCell = styled.td`
    padding: 32px;
`

const IconButton = styled.button`
    border: none;
    background: none;
`

const Icon = styled.img``

class Goals extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        showAddEditModal: false,
        showRemoveConfirmationModal: false,
        isRemoveMode: false,
        practices: fakeData
    };
    showAddEditModal = e => {
        this.setState({
            showAddEditModal: !this.state.showAddEditModal,
            showRemoveConfirmationModal: false
        });
    };
    showRemoveConfirmationModal = e => {
        this.setState({
            showAddEditModal: false,
            showRemoveConfirmationModal: !this.state.showRemoveConfirmationModal,
        });
    };
    setRemoveMode = e => {
        this.setState({
            isRemoveMode: !this.state.isRemoveMode
        });
    }
    render() {
        return (
            <Wrapper>
                <Heading>
                    <Title>Wellness Practices</Title>
                    <div>
                        <Button primary onClick={e => {this.showAddEditModal(e);}}>Add New</Button>
                        {this.state.isRemoveMode ? <Button secondary onClick={e => {this.setRemoveMode(e);}}>Done</Button> : 
                                        <Button onClick={e => {this.setRemoveMode(e);}}>Remove</Button>}
                    </div>
                </Heading>
                <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeadCell>WELLNESS PRACTICE</TableHeadCell>
                        <TableHeadCell>DATE</TableHeadCell>
                        <TableHeadCell>TRENDS</TableHeadCell>
                        { this.state.isRemoveMode && <TableHeadCell></TableHeadCell>}
                        <TableHeadCell>EDIT</TableHeadCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Object.values(fakeData).map((value, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell>{value.name}</TableCell>
                                <TableCell>{value.date}</TableCell>
                                <TableCell style={{color:"#43D48F"}}><Icon src="/icons/arrow.svg" style={{marginRight:"5px"}}></Icon>{value.trends}</TableCell>
                                { this.state.isRemoveMode && 
                                    <TableCell><IconButton onClick={e => {this.showRemoveConfirmationModal(e);}}>
                                        <Icon src="/icons/remove.svg"></Icon></IconButton>
                                    </TableCell> }
                                <TableCell><IconButton onClick={e => {this.showAddEditModal(e);}}><Icon src="/icons/edit.svg"></Icon></IconButton></TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
                </Table>
                <Modal onClose={this.showAddEditModal} show={this.state.showAddEditModal}>
                    <AddEditGoalModal onClose={this.showAddEditModal}></AddEditGoalModal>
                </Modal>
                <Modal onClose={this.showRemoveConfirmationModal} show={this.state.showRemoveConfirmationModal}>
                    <div style={{marginBottom:"20px"}}>Are you sure you want to remove this wellness practice?</div>
                    <div>
                        <Button onClick={e => {this.showRemoveConfirmationModal(e);}}>Delete</Button>
                        <Button primary onClick={e => {this.showRemoveConfirmationModal(e);}}>Keep</Button>
                    </div>
                </Modal>
            </Wrapper>
        );
    }
}

export default Goals;
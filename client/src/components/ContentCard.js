import styled from "styled-components";
import React from "react";
import { Route, withRouter } from "react-router-dom";

//Child of Panel column
//Parent of Card
const CardContainer = styled.div`
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  background-color: transparent;
  flex-grow: 1;
  padding: 5px, 20px;
`;

//Child of Card Container
const Card = styled.div`
  height: 100%fit-content;
  min-height: 700px;
  width: 100%;
  left: 180px;
  top: 164px;
  margin-right: 20px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

class ContentCard extends React.Component {
  render() {
    return (
      <CardContainer>
        <Card>{this.props.children}</Card>
      </CardContainer>
    );
  }
}

export default withRouter(ContentCard);

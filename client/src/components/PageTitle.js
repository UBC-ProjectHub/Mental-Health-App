import styled from "styled-components";
import React from "react";
import { Route, withRouter } from "react-router-dom";

const PageTitleContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  flex-grow: 1;
`;

const Title = styled.div`
  height: 20px;
  margin: 10px;
  display: flex;
  color: #848496;
  font-weight: bold;
`;

class PageTitle extends React.Component {
  render() {
    return (
      <PageTitleContainer>
        <Title>Progress</Title>
      </PageTitleContainer>
    );
  }
}

export default withRouter(PageTitle);

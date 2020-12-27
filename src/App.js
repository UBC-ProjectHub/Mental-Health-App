import styled from "styled-components";
import LoginForm from "./LoginForm";
import * as colors from "./colors";

const StyledText = styled.div`
  color: ${colors.TEXT_COLOR};
  font-size: 12px;
  padding: 0px 10px 5px 10px;
`;
const StyledHeader = styled.h1`
  color: ${colors.TEXT_COLOR};
  padding: 10px;
  font-size: 20px;
`;
const Wrapper = styled.div`
  flex-direction: row;
  display: flex;
  height: 100vh;
`;

const LeftPane = styled.div`
  height: 100%;
  width: 50%;
  background: linear-gradient(
    151.45deg,
    rgba(255, 139, 160, 0.4) 4.23%,
    rgba(146, 150, 255, 0.6) 57.67%,
    #cdcffe 94.91%
  );
  align-items: center;
  justify-content: center;
  display: flex;
`;
const RightPane = styled.div`
  width: 50%;
  height: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormWrapper = styled.div`
  display: flex;
  text-align: left;
  justify-content: left;
  flex-direction: column;
`;

const WomanMeditating = styled.img`
  max-width: 100%;
`;

const StyledLink = styled.a`
  color: ${colors.LINK_COLOR};
  text-decoration: none;
  &:visited {
    color: ${colors.LINK_COLOR};
  }
`;

function App() {
  return (
    <Wrapper>
      <LeftPane>
        <WomanMeditating src="/meditating-woman.png" />
      </LeftPane>
      <RightPane>
        <FormWrapper>
          <StyledHeader>Log In</StyledHeader>
          <LoginForm />
          <StyledText>
            Don't have an account?{" "}
            <StyledLink href="/sign-up">Sign Up</StyledLink>
          </StyledText>
          <StyledText>
            <StyledLink href="/forgot-password">Forgot Password?</StyledLink>
          </StyledText>
        </FormWrapper>
      </RightPane>
    </Wrapper>
  );
}

export default App;

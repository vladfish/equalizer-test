import GlobalStyles from "./Global/GlobalStyles";

import styled from "styled-components";
import bg from "./images/bg.png";

import headerIcon from "./images/header/header-icon.png";
import HeaderIconMedium from "./images/header/headerIcon-medium.png";

import Header from "./components/Header/Header";
import StyledMain from "./components/Main/StyledMain";
import StyledFooter from "./components/Footer/StyledFooter";

const AppWrapper = styled.div`
  width: 90rem;
  height: 114.5rem;
  background: url(${bg});
  background-repeat: no-repeat;
  margin: 0 auto;
  margin: 8rem 0 0 10rem;
  position: relative;

  @media (max-width: 768px) {
    width: 48rem;
    margin: 0;
  }
  @media (max-width: 376px) {
    width: 23.438rem;
    margin: 0;
  }

  &::after {
    content: "";
    position: absolute;
    background-image: url(${headerIcon});
    background-repeat: no-repeat;
    top: 0;
    right: 0;
    width: 19.5rem;
    height: 29.25rem;

    @media (max-width: 768px) {
      display: none;
    }

    @media (max-width: 376px) {
      width: 23.438rem;
    }
  }
  @media (max-width: 768px) {
    width: 48rem;

    @media (max-width: 376px) {
      width: 23.438rem;
    }

    .main-inner::after {
      display: none;
    }
  }
`;

const AppContainer = styled.div`
  width: 69.375rem;
  margin: 0 auto;
  padding: 3.87rem 0px 0px 0px;

  @media (max-width: 768px) {
    width: 48rem;
    padding-left: 2.06rem;
  }

  @media (max-width: 376px) {
    width: 23.438rem;
  }
`;
const logoWrapper = styled.div``;
const logo = styled.svg``;

function App() {
  return (
    <div>
      <GlobalStyles />
      <AppWrapper>
        <AppContainer>
          <Header />
          <StyledMain />
          <StyledFooter />
        </AppContainer>
      </AppWrapper>
    </div>
  );
}

export default App;

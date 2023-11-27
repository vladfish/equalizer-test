import React from "react";
import styled from "styled-components";
import mainBg from "../../images/main/main-bg.png";
import mainBgMedium from "../../images/main/mainBg-medium.jpg";
import mainBgMobile from "../../images/main/mainBg-small.jpg";
import phoneImage from "../../images/main/phone.png";
import StyledBaner from "../../components/Baner/StyledBaner";
import phoneTablet from "../../images/main/phone-tablet.png";
import phoneMobile from "../../images/main/phone-mobile.png";

const MainWrapper = styled.div`
  position: relative;
  .main-inner {
    width: 69.375rem;
    height: 37.5rem;
    border-radius: 0.75rem;

    @media (min-width: 767px) {
      .tablet,
      .mobile {
        display: none;
      }
    }
    @media (max-width: 768px) {
      .tablet {
        display: flex;
      }
      .desctop,
      .mobile {
        display: none;
      }
    }

    @media (max-width: 376px) {
      width: 23.4375rem;
      .mobile {
        display: block;
      }
      .desctop,
      .tablet {
        display: none;
      }
    }
  }

  .main-inner::before {
    position: absolute;
    content: "";
    background-image: url(${phoneImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    left: 12%;
    top: -13.125rem;
    width: 19.5rem;
    height: 40.125rem;

    @media (max-width: 768px) {
      width: 16.88788rem;
      height: 34.75rem;
      left: 80px;
      margin-top: 6.94rem;
    }

    @media (max-width: 376px) {
      bottoms: 0;
      left: 0;
      transform: translate(15%, -15%);
    }
  }
`;

const Main = () => (
  <MainWrapper>
    <div className="main-inner">
      <img className="desctop" src={mainBg} alt="" />
      <img className="tablet" src={mainBgMedium} alt="" />
      <img className="mobile" src={mainBgMobile} alt="" />
    </div>
    <StyledBaner></StyledBaner>
  </MainWrapper>
);

export default Main;

import React from "react";
import styled from "styled-components";
import StyledButton from "../../components/Button/StyledButton";
import aplleIcon from "../../images/icons/apple.png";
import androidIcon from "../../images/icons/andro.png";

const StyledBannerWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-25%, 20%);

  @media (max-width: 768px) {
    right: 0;
    bottom: 0;
  }

  @media (max-width: 376px) {
    left: 0;
    top: 0;
    transform: translate(0, 65%);
  }

  .styled-baner__container {
    width: 27.875rem;
    height: 39.0625rem;
    border-radius: 0.75rem;
    background: #fa7453;
    padding: 3.62rem 3.69rem 3rem 3.37rem;

    @media (max-width: 768px) {
      width: 24.9375rem;
      height: 34.125rem;
      border-radius: 0.75rem;
      background: #fa7453;
      padding: 3rem 3.06rem 3rem 3rem;
    }

    @media (max-width: 376px) {
      width: 23.4375rem;
      height: 34.125rem;
      border-radius: 0.75rem;
      background: #fa7453;
      padding: 3rem 2.31rem 3rem 2.25rem;
    }
  }
  .styled-banner__title {
    color: #fcfaf9;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 1.38rem;

    @media (max-width: 768px) {
      color: #fcfaf9;
      font-size: 2rem;
      font-weight: 700;
      line-height: 125%;
      margin-bottom: 0.75rem;
    }

    @media (max-width: 376px) {
      color: #191826;
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 120%;
      letter-spacing: -0.02844rem;
    }
  }
  .styled-banner__subtitle {
    color: #fcfaf9;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 170%;
    margin-bottom: 2.44rem;

    @media (max-width: 768px) {
      color: #fcfaf9;
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 155.556%;
      margin-bottom: 2.25rem;
    }

    @media (max-width: 376px) {
      color: #191826;
      font-size: 1rem;
      font-weight: 400;
      line-height: 162.5%;
    }
  }
  .styled-baner__price {
    margin-bottom: 2rem;
  }
  .styled-baner__text {
    color: #fcfaf9;
    font-size: 4.0625rem;
    font-weight: 700;
    line-height: 80%;

    span {
      color: #fcfaf9;
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 160%;
      letter-spacing: -0.0125rem;
    }
  }
`;

const StyledBaner = () => {
  return (
    <StyledBannerWrapper>
      <div className="styled-baner__container">
        <div className="styled-banner__title">Premium EQ</div>
        <div className="styled-banner__subtitle">
          Get expert-level control with a robust equalizer, volume mixer, and
          spatial audio. Take your listening experience to a whole new level and
          access all our incredible features!
        </div>
        <div className="styled-baner__price">
          <div className="styled-baner__text">
            $4 <span>/ month</span>
          </div>
        </div>
        <div className="styled-baner__buttons">
          <StyledButton primary>
            <img src={aplleIcon} alt="" />
            <span>iOS Download</span>
          </StyledButton>
          <StyledButton>
            <img src={androidIcon} alt="" />
            <span>Android Download</span>
          </StyledButton>
        </div>
      </div>
    </StyledBannerWrapper>
  );
};

export default StyledBaner;

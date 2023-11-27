import styled from "styled-components";

export const Title = styled.h1`
  color: #191826;
  font-size: 5.5rem;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.0625rem;
  margin: 7.94rem 0 2.5rem 0;

  @media (max-width: 768px) {
    font-size: 4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: -0.04544rem;
    margin: 5.94rem 0 1.75rem 0;
  }

  @media (max-width: 376px) {
    font-style: normal;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: -0.02844rem;
    margin-bottom: 4rem 0 1.25rem 0;
    width: 23.438rem;
  }
`;

export const SubTitle = styled.h5`
  color: #191826;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 170%;
  width: 51.5625rem;
  margin-bottom: 14rem;

  @media (max-width: 768px) {
    width: 32.125rem;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 155.556%;
    margin-bottom: 6.75rem;

    @media (max-width: 376px) {
      width: 20.4375rem;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 162.5%;
      margin-bottom: 10.65rem;
    }
  }
`;

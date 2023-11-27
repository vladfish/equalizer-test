import styled from "styled-components";

const StyledButton = styled.a`
  width: 20.8125rem;
  height: 3.8125rem;
  border-radius: 0.75rem;
  background: #191826;

  background: ${(props) => (props.primary ? "#191826" : "#FCFAF9")};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  color: ${(props) => (props.primary ? "#fff" : "#000")};
  font-size: 1rem;
  font-weight: 900;
  line-height: 1.625%;

  margin-bottom: ${(props) => (props.primary ? "1rem" : "")};
  cursor: pointer;
  user-select: none;
  transition: 0.2s;

  span {
    margin-left: 1rem;
  }

  @media (max-width: 376px) {
    width: 18.5rem;
    height: 3.8125rem;
    border-radius: 0.75rem;
  }

  &:hover {
    background: ${(props) => (props.primary ? "#66E2DC" : "#FFB964")};
    color: #fff;
  }

  &:active {
    background: ${(props) => (props.primary ? "#66E2DC" : "#FFB964")};
    color: #fff;
  }
`;

export default StyledButton;

import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => props.$color};
  background-color: ${(props) => props.theme.button.background};
  border: 2px solid ${(props) => props.theme.button.background};
  font-family: ${(props) => props.theme.button.font};
  outline: none;
  padding: 13px 32px;
  border-radius: 24px;
  font-size: 1em;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.button.background};
  }
  @media only screen and (min-width: 600px) {
    margin-top: 55px;
  }
`;

export default Button;

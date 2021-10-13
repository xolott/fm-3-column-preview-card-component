import styled from "styled-components";

const CardTitle = styled.h1`
  font-family: ${(props) => props.theme.heading.font};
  color: ${(props) => props.theme.heading.color};
  text-transform: uppercase;
  line-height: 0.9em;
  font-size: 2.5rem;
  margin: 0px;
`;

export default CardTitle;

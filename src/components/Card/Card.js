import styled, { withTheme } from "styled-components";
import Button from "../Button";
import CardTitle from "./CardTitle";

const CardContainer = styled.article`
  background-color: ${(props) => props.$color};
  padding: 48px 50px;
  @media only screen and (min-width: 600px) {
  }
  img {
    margin-bottom: 36px;
  }
  p {
    line-height: 1.6rem;
    color: ${(props) => props.theme.text.color};
    font-family: ${(props) => props.theme.text.font};
    padding: 30px 0px;
    margin: 0;
  }
`;

const Card = ({ title, color, icon, children }) => {
  return (
    <CardContainer $color={color}>
      <img aria-hidden="true" src={icon} alt={title} />
      <CardTitle>{title}</CardTitle>
      <p>{children}</p>
      <Button $color={color}>Learn More</Button>
    </CardContainer>
  );
};

export default withTheme(Card);

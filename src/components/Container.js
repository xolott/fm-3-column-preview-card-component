import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  @media only screen and (min-width: 600px) {
    padding: 170px 260px 0 260px;
  }
`;

export default Container;

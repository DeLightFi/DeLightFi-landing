import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 15vh;

  div {
    width: 33%;
    padding: 2%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: auto;
      max-height: 100%;
    }
  }

  @media (max-width: 480px) {
    height: 10vh;
    div {
      padding: 5%;
      img {
        max-height: 70%;
      }
    }
  }
`;

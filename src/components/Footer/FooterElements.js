import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 18vh;
  position: relative;
  overflow: hidden;
`;

export const Main = styled.div`
  position: absolute;
  top: 3.5vh;
  left: 5vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3%;
  width: calc(100vw - 2 * 5vw);

  span {
    font-family: "Spline Sans Mono";
    font-style: normal;
    font-weight: 700;
    font-size: 1.6vw;
    color: #fabc2e;

    a {
      text-decoration: none;
      color: #fabc2e;
      cursor: pointer;
    }
  }
`;

export const Bottom = styled.div`
  position: absolute;
  top: 12vh;
  left: 3vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: calc(100vw - 2 * 3vw);

  svg {
    width: 1.5vw;
    height: 1.5vw;
  }

  div {
    width: 38%;
    height: 2px;
    background-color: #fabc2e;
  }

  span {
    font-family: "Spline Sans Mono";
    font-style: normal;
    font-weight: 700;
    font-size: 1vw;
    color: #fabc2e;

    a {
      text-decoration: none;
      cursor: pointer;
    }
  }
`;

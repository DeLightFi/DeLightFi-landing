import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 60px);
  font-family: "Spline Sans", sans-serif;
  color: white;
  font-size: 16px;
  background-color: black;

  svg {
    position: absolute;
    top: 4vw;
    right: 8vw;

    width: 10vw;
    height: 10vw;
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: calc(100% - 2 * 6%);
  height: calc(100% - 2 * 3vw);
  padding: 3vw 6%;
  gap: 30px;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 3%;
`;

export const Title = styled.div`
  width: 60%;
  font-family: "Spline Sans Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 3.6vw;
  line-height: 3.8vw;
  display: flex;
  align-items: center;
  color: #ffffff;
`;

export const SubTitle = styled.div`
  width: 40%;
  font-family: "Spline Sans Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 1vw;
  line-height: 1.4vw;
  display: flex;
  align-items: center;
  color: #ffffff;
`;

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: flex-end;
`;

export const LBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  height: 80%;
  width: 34%;

  font-family: "Spline Sans Mono";
  font-style: normal;
  font-weight: 700;
  color: #ffffff;

  background: #161616;
  border-radius: 20px 0px 0px 20px;

  h1 {
    font-size: 2.2vw;
    margin: 0 10%;
    color: #fab52e;
  }

  h2 {
    font-size: 1.6vw;
    margin: 0 10%;
  }

  span {
    font-weight: 600;
    font-size: 1.2vw;
    margin: 0 10%;
  }
`;

export const MBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  width: 32%;
  height: 100%;

  font-family: "Spline Sans Mono";
  font-style: normal;
  font-weight: 700;
  color: #000000;

  background: #ffa72e;
  border-radius: 20px 20px 0px 0px;

  h1 {
    font-size: 2.2vw;
    margin: 0 10%;
  }

  h2 {
    font-size: 1.6vw;
    margin: 0 10%;
  }

  span {
    font-weight: 600;
    font-size: 1.2vw;
    margin: 0 10%;
  }
`;

export const RBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  height: 80%;
  width: 34%;

  font-family: "Spline Sans Mono";
  font-style: normal;
  font-weight: 700;
  color: #ffffff;

  background: #161616;
  border-radius: 0px 20px 20px 0px;

  h1 {
    font-size: 2.2vw;
    margin: 0 10%;
    color: #fab52e;
  }

  h2 {
    font-size: 1.6vw;
    margin: 0 10%;
  }

  span {
    font-weight: 600;
    font-size: 1.2vw;
    margin: 0 10%;
  }
`;

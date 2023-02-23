import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 60px);
  font-family: "Spline Sans", sans-serif;
  color: white;
  font-size: 16px;
  background-color: black;
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

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Text = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 3%;
`;

export const Title = styled.div`
  font-family: "Spline Sans Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 3.6vw;
  line-height: 3.8vw;
  display: flex;
  align-items: center;
  color: #ffffff;

  @media (max-width: 480px) {
    width: 100%;
    font-size: 5.6vw;
    line-height: 5.8vw;
  }
`;

export const SubTitle = styled.div`
  width: 100%;
  font-family: "Spline Sans Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 1vw;
  line-height: 1.4vw;
  display: flex;
  align-items: center;
  color: #ffffff;

  @media (max-width: 480px) {
    width: 100%;
    font-size: 2vw;
    line-height: 2.4vw;
  }
`;

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 2%;
  align-items: flex-end;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const LBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  height: 100%;
  width: 30%;

  font-family: "Spline Sans Mono";
  font-style: normal;
  font-weight: 700;
  color: #ffffff;

  background: #161616;
  border-radius: 20px;

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

  @media (max-width: 480px) {
    height: 20vh;
    width: 100%;

    h1 {
      font-size: 4.2vw;
    }

    h2 {
      font-size: 4.6vw;
    }

    span {
      font-size: 2.2vw;
    }
  }
`;

export const RBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 70%;
  height: 100%;

  gap: 6%;

  @media (max-width: 480px) {
    width: 100%;
    height: calc(100% - 25vh);
    gap: 3%;
  }
`;

export const RBox1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  height: 40%;
  width: 100%;

  font-family: "Spline Sans Mono";
  font-style: normal;
  font-weight: 700;
  color: #161616;

  background: #ffa72e;
  border-radius: 20px;

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

  @media (max-width: 480px) {
    height: 20vh;
    width: 100%;

    h1 {
      font-size: 4.2vw;
    }

    h2 {
      font-size: 4.6vw;
    }

    span {
      font-size: 2.2vw;
    }
  }
`;

export const RBox2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  height: 60%;
  width: 100%;

  font-family: "Spline Sans Mono";
  font-style: normal;
  font-weight: 700;
  color: #ffffff;

  background: #161616;
  border-radius: 20px;

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

  @media (max-width: 480px) {
    height: 20vh;
    width: 100%;

    h1 {
      font-size: 4.2vw;
    }

    h2 {
      font-size: 4.6vw;
    }

    span {
      font-size: 2.2vw;
    }
  }
`;

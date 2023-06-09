import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  color: white;
  font-size: 16px;
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  z-index: 1;
`;

export const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  z-index: 10;
  width: 40%;
  height: 100%;
  pointer-events: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 80px;

  @media (max-width: 480px) {
    width: 85%;
    margin-left: 15%;
    height: calc(100% - 80px);
    padding-top: 60px;
    gap: 40px;
  }

  h1 {
    font-weight: bold;
    font-family: "Spline Sans Mono", monospace;
    font-size: 70px;
    margin: 0;
    max-width: 500px;
    pointer-events: auto;
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

    @media (max-width: 1024px) {
      font-size: 60px;
      max-width: 400px;
    }
    @media (max-width: 800px) {
      font-size: 40px;
      max-width: 300px;
    }
  }

  p {
    font-weight: normal;
    max-width: 380px;
    pointer-events: auto;
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .button {
    text-decoration: none;
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.1);
    max-width: 280px;
    backdrop-filter: blur(20px);
    font-weight: 600;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
    transition: 1s;
    cursor: pointer;
    pointer-events: auto;

    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;

    :hover {
      border: 1px solid rgba(255, 255, 255, 0.8);
      transform: translateY(-3px);
    }
  }

  h1,
  p,
  .button {
    margin: 0 30px 0 100px;

    @media (max-width: 1024px) {
      margin: 0 30px;
    }
  }
`;

export const GraphWrapper = styled.div`
  width: calc(60% - 2 * 2%);
  height: calc(100% - 60px - 60px);
  padding: 60px 2% 60px 2%;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const Social = styled.div`
  z-index: 10;
  position: absolute;
  top: 15vh;
  left: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  background-color: #161616;
  padding: 1%;

  div {
    width: 1px;
    height: 55vh;
    background: linear-gradient(180deg, #ff9331 0%, #35bcff 100%);
  }
`;

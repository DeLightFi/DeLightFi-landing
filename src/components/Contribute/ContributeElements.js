import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(60vh - 60px);
  font-family: "Spline Sans", sans-serif;
  color: white;
  font-size: 16px;
  background-color: #161616;
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
`;

export const Head = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
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
`;

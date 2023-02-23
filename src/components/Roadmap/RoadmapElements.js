import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 60px);
  font-family: "Spline Sans Mono";
  font-style: normal;
  color: white;
  background-color: #161616;

  @media (max-width: 480px) {
    height: 65vh;
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
  gap: 10px;
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

export const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Timeline = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;

  @media (max-width: 480px) {
    flex-direction: row;
    height: auto;
  }
`;

export const Milestone = styled.span`
  position: relative;
  padding: 0 0 50px 60px;
  font-size: 1.6vw;

  @media (max-width: 480px) {
    padding: 25px 0 30px 11vw;
    font-size: 2.6vw;
  }

  :hover {
    cursor: pointer;
  }

  :last-child {
    :before {
      border: 0;
    }
  }

  :before {
    position: absolute;
    left: 30px;
    top: 14px;
    content: " ";
    border: 1px solid rgba(255, 255, 255, 0.74);
    height: 100%;

    @media (max-width: 480px) {
      height: 0%;
      width: 100%;
    }
  }

  :after {
    position: absolute;
    left: 23px;
    top: 4px;
    content: " ";
    border: 3px solid rgba(255, 255, 255, 0.74);
    border-radius: 500%;
    background: #ffa72e;
    height: 10px;
    width: 10px;
    transition: all 500ms ease-in-out;
  }
`;

export const Item = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: 0.3s;

  .title {
    font-size: 2.6vw;
    font-weight: 800;
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 2.6vw;

    .title {
      font-size: 4.6vw;
      font-weight: 800;
    }
  }
`;

export const Picture = styled.div`
  width: 20%;
  height: 100%;
  margin-left: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: #ffa72e;

  img {
    width: 8vw;
    height: 8vw;
    fill: #161616;
  }

  @media (max-width: 480px) {
    width: 80%;
    height: 25%;
  }
`;

import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  margin: 0 auto;
  padding: 5px 0;

  background-color: rgba(22, 22, 22, 0.8);
  backdrop-filter: blur(5px);

  font-family: "Spline Sans Mono";
  font-style: normal;
  color: white;
  font-size: 16px;

  z-index: 10;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  gap: 30px;
  margin: 0 30px 0 50px;
  padding: 0;

  pointer-events: auto;

  @media (max-width: 420px) {
    justify-content: center;
  }

  @media (max-width: 1024px) {
    margin: 0 30px;
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;

    @media (max-width: 420px) {
      li:nth-child(2),
      li:nth-child(3),
      li:nth-child(4),
      li:nth-child(5) {
        display: none;
      }
    }

    li {
      list-style: none;
      margin: 0;
      display: flex;
      flex-direction: row;
      gap: 1vw;

      img {
        padding: 0;
        margin-right: 30px;

        @media (max-width: 420px) {
          margin-right: 0;
        }
      }
    }
  }

  .button {
    text-decoration: none;
    color: #161616;
    padding: 8px 20px;
    border-radius: 14px;
    border: 1px solid #161616;
    background: rgba(255, 167, 46, 0.9);
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
    transition: 1s;
    color: white;
    font-size: 16px;
    background-color: #161616;

    :hover {
      background: #161616;
      border: 1px solid rgba(255, 167, 46, 0.9);
      color: #ffa72e;
      cursor: pointer;
    }

    @media (max-width: 420px) {
      display: none;
    }
  }
`;

export const NavLinks = styled(LinkS)`
  text-decoration: none;
  color: white;
  padding: 8px 20px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0);
  transition: 1s;
  cursor: pointer;

  .active {
    border-bottom: 3px solid #000;
  }

  :hover {
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

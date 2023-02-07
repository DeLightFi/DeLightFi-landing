import styled from "styled-components";

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;

  width: 100%;
  margin: 0 auto;
  padding-top: 10px;

  background-color: rgba(22, 22, 22, 0.8);
  backdrop-filter: blur(5px);

  font-family: "Spline Sans", sans-serif;
  color: white;
  font-size: 16px;

  z-index: 1;
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

  @media (max-width: 1024px) {
    margin: 0 30px;
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;

    li {
      list-style: none;
      margin: 0;
      img {
        padding: 0;
        margin-right: 30px;
      }
      a {
        text-decoration: none;
        color: white;
        padding: 8px 20px;
        border-radius: 14px;
        border: 1px solid rgba(255, 255, 255, 0);
        transition: 1s;

        :hover {
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      }
    }
  }

  button {
    text-decoration: none;
    color: white;
    padding: 8px 20px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0);
    background: rgba(250, 188, 46, 0.1);
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
    transition: 1s;
    font-family: "Spline Sans", sans-serif;
    color: white;
    font-size: 16px;

    :hover {
      background: rgba(250, 188, 46, 0.8);
      cursor: pointer;
    }
  }

  @media (max-width: 800px) {
    justify-content: space-between;
    li:nth-child(2),
    li:nth-child(3),
    li:nth-child(4),
    li:nth-child(5) {
      display: none;
    }
  }
`;

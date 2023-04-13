import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(100% - 2 * 40px);
  height: calc(100vh - 2 * 40px);
  padding: 40px;
  gap: 30px;
  font-family: "Spline Sans", sans-serif;
  color: white;
  font-size: 1vw;
  background: #ffa72e;
`;

export const TooltipWrapper = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  background: #161616;
  border-radius: 10px;
  font-family: "Spline Sans Mono";
  font-style: normal;
  padding: 12px;
  position: relative;
`;

export const TooltipSocial = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: row-reverse;
  gap: 0.8vw;
  padding-top: 1vw;
  padding-right: 1vw;

  a {
    svg {
      size: 1vw;
      color: white;
    }
  }
`;

export const TooltipTitle = styled.span`
  font-weight: 700;
  font-size: 1.4vw;
  line-height: 1.6vw;
`;

export const TooltipText = styled.span`
  font-weight: 600;
  font-size: 0.8vw;
  line-height: 1vw;
  text-align: justify;
`;

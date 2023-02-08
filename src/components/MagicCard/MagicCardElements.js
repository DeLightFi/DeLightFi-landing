import styled from "styled-components";

export const Card = styled.div`
  --step: 5%;
  --pattern: url("http://allyourhtml.club/carousel/pattern.webp") center / 75%;

  --rainbow: repeating-linear-gradient(
      0deg,
      rgb(255, 119, 115) calc(var(--step) * 1),
      rgba(255, 237, 95, 1) calc(var(--step) * 2),
      rgba(168, 255, 95, 1) calc(var(--step) * 3),
      rgba(131, 255, 247, 1) calc(var(--step) * 4),
      rgba(120, 148, 255, 1) calc(var(--step) * 5),
      rgb(216, 117, 255) calc(var(--step) * 6),
      rgb(255, 119, 115) calc(var(--step) * 7)
    )
    0% var(--bg-y) / 200% 700%;
  --diagonal: repeating-linear-gradient(
      128deg,
      #0e152e 0%,
      hsl(180, 10%, 60%) 3.8%,
      hsl(180, 10%, 60%) 4.5%,
      hsl(180, 10%, 60%) 5.2%,
      #0e152e 10%,
      #0e152e 12%
    )
    var(--bg-x) var(--bg-y) / 300%;
  --shade: radial-gradient(
      farthest-corner circle at var(--x) var(--y),
      rgba(255, 255, 255, 0.1) 12%,
      rgba(255, 255, 255, 0.15) 20%,
      rgba(255, 255, 255, 0.25) 120%
    )
    var(--bg-x) var(--bg-y) / 300%;

  width: 100%;
  height: 350px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  border-radius: 48px;
`;

export const CardWrapper = styled.div`
  perspective: 600px;
  position: absolute;
  inset: 0;
`;

export const Card3D = styled.div`
  transform: rotateY(var(--r-x)) rotateX(var(--r-y));
  position: absolute;
  inset: 0;
  clip-path: inset(0 0 0 0 round 48px);
`;

export const CardImage = styled.div`
  clip-path: inset(0 0 0 0 round 48px);
  width: 100%;
  height: 100%;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const CardLayer1 = styled.div`
  position: absolute;
  inset: 0;
  z-index: 20;
  mix-blend-mode: soft-light;
  clip-path: inset(0 0 1px 0 round 48px);
  background: radial-gradient(
    farthest-corner circle at var(--x) var(--y),
    rgba(255, 255, 255, 0.8) 10%,
    rgba(255, 255, 255, 0.65) 20%,
    rgba(255, 255, 255, 0) 90%
  );
`;

export const CardLayer2 = styled.div`
  position: absolute;
  inset: 0;
  z-index: 30;

  mix-blend-mode: color-dodge;
  will-change: background;
  transition-property: opacity;
  clip-path: inset(0 0 1px 0 round 48px);

  background-blend-mode: hue, hue, hard-light, overlay;
  background: var(--pattern), var(--rainbow), var(--diagonal);

  :after {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--pattern), var(--rainbow), var(--diagonal), var(--shade);
    mix-blend-mode: exclusion;
    background-size: 75%, 200% 400%, 800%, 200%;
    background-position: center, 0% var(--bg-y),
      calc(var(--bg-x) * -1) calc(var(--bg-y) * -1), var(--bg-x) var(--bg-y);
    background-blend-mode: soft-light, hue, hard-light;
  }
`;

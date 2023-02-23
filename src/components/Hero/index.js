import { FaTwitter, FaDiscord, FaGithub } from "react-icons/fa";
import MorphineGraph from "../MorphineGraph";

import {
  Wrapper,
  BackgroundWrapper,
  Content,
  Social,
  GraphWrapper,
} from "./HeroElements";
import HeroBackground from "./background";

const Hero = () => {
  return (
    <Wrapper>
      <BackgroundWrapper>
        <HeroBackground />
      </BackgroundWrapper>
      <Social>
        <div />
        <a
          style={{ cursor: "pointer" }}
          href="https://twitter.com/MorphineFinance"
          target="_blank"
        >
          <FaTwitter color="white" />
        </a>
        <a
          style={{ cursor: "pointer" }}
          href="https://discord.gg/PsMNBhnB"
          target="_blank"
        >
          <FaDiscord color="white" />
        </a>
        <a
          style={{ cursor: "pointer" }}
          href="https://github.com/Morphine-labs/"
          target="_blank"
        >
          <FaGithub color="white" />
        </a>
      </Social>
      <Content>
        <h1>Morphine Toolkit</h1>
        <p>
          Morphine offers powerful and versatile tools to build, manage, scale
          and monetise on-chain strategies from the starknet ecosystem.
        </p>
        <div>
          <a className="button" href="https://app.morphine.store/" target="_blank">
            Launch MVP
          </a>
          <a className="button" href="https://docs.morphine.store/contributors/tasks" target="_blank">
            Build with us!
          </a>
        </div>
      </Content>
      <GraphWrapper>
        <MorphineGraph />
      </GraphWrapper>
    </Wrapper>
  );
};

export default Hero;

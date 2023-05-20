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
          href="https://twitter.com/DeLightFi_"
          target="_blank"
        >
          <FaTwitter color="white" />
        </a>
        <a
          style={{ cursor: "pointer" }}
          href="https://discord.gg/hJupqTrK4G"
          target="_blank"
        >
          <FaDiscord color="white" />
        </a>
        <a
          style={{ cursor: "pointer" }}
          href="https://github.com/DeLightFi"
          target="_blank"
        >
          <FaGithub color="white" />
        </a>
      </Social>
      <Content>
        <h1>DeLightFi</h1>
        <p>
          DeLightFi offers a comprehensive range of tools designed to maximize the potential of decentralized finance on Layer 2 solutions.
        </p>
        <div>
          <a className="button" href="https://morphinefi.xyz/" target="_blank">
            Morphine - Mainnet
          </a>
          <a className="button" href="https://app.morphine.store/" target="_blank">
            Morphine - Testnet
          </a>
          <a className="button" href="https://starkendefi.xyz/app" target="_blank">
            Starken
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

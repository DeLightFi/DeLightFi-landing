import { FaTwitter, FaDiscord, FaGithub } from "react-icons/fa";
import MorphineGraph from "../MorphineGraph";

import { Wrapper, Content, Social, GraphWrapper } from "./HeroElements";

const Hero = () => {
  return (
    <Wrapper>
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
        <h1>This is Morphine</h1>
        <p>
          Unlock the Full Potential of Your Crypto Assets with Morphine build on
          StarkNet - The Revolutionary Decentralized Leverage Platform through
          the Power of the Blockchain.
        </p>
        <a className="button" href="https://morphine.store/" target="_blank">
          Launch the App
        </a>
      </Content>
      <GraphWrapper>
        <MorphineGraph />
      </GraphWrapper>
    </Wrapper>
  );
};

export default Hero;

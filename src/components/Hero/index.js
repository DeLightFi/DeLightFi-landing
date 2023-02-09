import Spline from "@splinetool/react-spline";

import { FaTwitter, FaDiscord, FaGithub } from "react-icons/fa";

import { Wrapper, Content, Social } from "./HeroElements";

const Hero = () => {
  return (
    <Wrapper>
      <Spline
        className="spline"
        scene="https://prod.spline.design/VtdjXOqCwQA7l6jt/scene.splinecode"
      />
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
    </Wrapper>
  );
};

export default Hero;

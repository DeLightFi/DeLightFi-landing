import Spline from "@splinetool/react-spline";

import Logo from "../../images/logo.svg";
import IconTwitter from "../../images/icon-twitter.svg";

import { Wrapper, Content, Menu, Social } from "./HeroElements";

const Hero = () => {
  return (
    <Wrapper>
      <Spline
        className="spline"
        scene="https://prod.spline.design/VtdjXOqCwQA7l6jt/scene.splinecode"
      />
      <Social>
        <div />
        <img src={IconTwitter} alt="Twitter" />
      </Social>
      <Content>
        <Menu>
          <li>
            <img src={Logo} width="50px" alt="title" />
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <button>Launch the App</button>
          </li>
        </Menu>
        <h1>This is Morphine</h1>
        <p>
          Unlock the Full Potential of Your Crypto Assets with Morphine build on
          StarkNet - The Revolutionary Decentralized Leverage Platform through
          the Power of the Blockchain.
        </p>
        <button>Launch the App</button>
      </Content>
    </Wrapper>
  );
};

export default Hero;

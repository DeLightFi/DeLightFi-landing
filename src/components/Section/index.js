import MagicCard from "../MagicCard";
import { Wrapper } from "./SectionElements";

const Section = () => {
  return (
    <Wrapper id="section">
      <MagicCard
        name="card1"
        img={
          "https://images.ctfassets.net/6g6hg01fg28j/3BziIPFoVB1q4z6V1CwbZc/0d11f473f2d914687d62e31685410571/illustration_starknet-image.png"
        }
      />
      <MagicCard
        name="card2"
        img={
          "https://images.ctfassets.net/6g6hg01fg28j/3BziIPFoVB1q4z6V1CwbZc/0d11f473f2d914687d62e31685410571/illustration_starknet-image.png"
        }
      />
      <MagicCard
        name="card3"
        img={
          "https://images.ctfassets.net/6g6hg01fg28j/3BziIPFoVB1q4z6V1CwbZc/0d11f473f2d914687d62e31685410571/illustration_starknet-image.png"
        }
      />
    </Wrapper>
  );
};

export default Section;

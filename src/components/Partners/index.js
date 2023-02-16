import { Wrapper } from "./PartnersElements";
import Image1 from "./logo/starknet.svg";
import Image2 from "./logo/morphine.svg";
import Image3 from "./logo/onlydust.svg";

const Partners = () => {
  return (
    <Wrapper id="section">
      <div>
        <img src={Image1} />
      </div>
      <div>
        <img src={Image2} />
      </div>
      <div>
        <img src={Image3} />
      </div>
    </Wrapper>
  );
};

export default Partners;

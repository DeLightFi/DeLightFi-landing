import { Wrapper } from "./PartnersElements";
import Image from "./snw.png";

const Partners = () => {
  return (
    <Wrapper id="section">
      <div>
        <img src={Image} />
      </div>
      <div>
        <img src={Image} />
      </div>
      <div>
        <img src={Image} />
      </div>
    </Wrapper>
  );
};

export default Partners;

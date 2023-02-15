import { Wrapper } from "./PartnersElements";
import Image1 from "./snw.png";
import Image2 from "./mLabs.png";
import Image3 from "./onlyD_white.png";


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

import {
  Wrapper,
  Content,
  Head,
  Text,
  Title,
  SubTitle,
  ContribImages,
} from "./ContributeElements";
import data from "./data";

const Contribute = () => {
  return (
    <Wrapper id="contribute">
      <Content>
        <Head>
          <Text>
            <Title>Let's Contribute!</Title>
            <SubTitle>
              Join an assembly of DeFi lovers
            </SubTitle>
          </Text>
        </Head>
        <ContribImages>
          {data.contributors.map((c) => (
            <a href={`https://github.com/${c.github}`}>
              <img src={`https://avatars.githubusercontent.com/${c.github}`} />
            </a>
          ))}
        </ContribImages>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        <a className="button" href="https://morphine.store/" target="_blank">
          Join the Morphine's adventure
        </a>
      </Content>
    </Wrapper>
  );
};

export default Contribute;

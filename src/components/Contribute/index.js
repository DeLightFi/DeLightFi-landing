import {
  Wrapper,
  Content,
  Head,
  Text,
  Title,
  SubTitle,
} from "./ContributeElements";
const Contribute = () => {
  return (
    <Wrapper>
      <Content>
        <Head>
          <Text>
            <Title>Let's Contribute!</Title>
            <SubTitle>
              Join an assembly of DeFi lovers
            </SubTitle>
          </Text>
        </Head>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        <a className="button" href="https://morphine.store/" target="_blank">
          Join the Morphine's adventure
        </a>
      </Content>
    </Wrapper>
  );
};

export default Contribute;

import {
  Head,
  Text,
  SubTitle,
  Title,
  Content,
  Wrapper,
  BoxWrapper,
  LBox,
  MBox,
  RBox,
  RBoxWrapper,
  RBox1,
  RBox2,
} from "./ThreeDivs2Elements";

const ThreeDivs2 = () => {
  return (
    <Wrapper id="about2">
      <Content>
        <Head>
          <Text>
            <Title>How it works?</Title>
            <SubTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </SubTitle>
          </Text>
        </Head>
        <BoxWrapper>
          <LBox>
            <h2>Lorem ipsum</h2>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              volutpat bibendum fermentum. Fusce in sapien sit amet lectus
              iaculis facilisis.
            </span>
          </LBox>
          <RBoxWrapper>
            <RBox1>
              <h2>Lorem ipsum</h2>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                volutpat bibendum fermentum. Fusce in sapien sit amet lectus
                iaculis facilisis.
              </span>
            </RBox1>
            <RBox2>
              <h2>Lorem ipsum</h2>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                volutpat bibendum fermentum. Fusce in sapien sit amet lectus
                iaculis facilisis.
              </span>
            </RBox2>
          </RBoxWrapper>
        </BoxWrapper>
      </Content>
    </Wrapper>
  );
};

export default ThreeDivs2;

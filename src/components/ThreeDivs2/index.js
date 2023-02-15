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
import data from "./data.json";

const ThreeDivs2 = () => {
  return (
    <Wrapper id="about2">
      <Content>
        <Head>
          <Text>
            <Title>{data.title}</Title>
            <SubTitle>{data.subtitle}</SubTitle>
          </Text>
        </Head>
        <BoxWrapper>
          <LBox>
            <h2>{data.sections[0].title}</h2>
            <span>{data.sections[0].text}</span>
          </LBox>
          <RBoxWrapper>
            <RBox1>
              <h2>{data.sections[1].title}</h2>
              <span>{data.sections[1].text}</span>
            </RBox1>
            <RBox2>
              <h2>{data.sections[2].title}</h2>
              <span>{data.sections[2].text}</span>
            </RBox2>
          </RBoxWrapper>
        </BoxWrapper>
      </Content>
    </Wrapper>
  );
};

export default ThreeDivs2;

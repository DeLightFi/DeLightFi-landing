import {
  Wrapper,
  Content,
  Head,
  Text,
  Title,
  SubTitle,
} from "./ContributeElements";
// TODO: import GitHubCalendar from "react-github-calendar";
const Contribute = () => {
  return (
    <Wrapper>
      <Content>
        <Head>
          <Text>
            <Title>Let's Contribute!</Title>
            <SubTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </SubTitle>
          </Text>
        </Head>
        {/*TODO: conflit with MorphineGraph <GitHubCalendar username="0xSacha" color="#fab52e" /> */}
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        <a className="button" href="https://morphine.store/" target="_blank">
          Join the Morphine's adventure
        </a>
      </Content>
    </Wrapper>
  );
};

export default Contribute;

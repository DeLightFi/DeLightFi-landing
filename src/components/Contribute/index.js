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
            <SubTitle>Join an assembly of DeFi lovers</SubTitle>
          </Text>
        </Head>
        <ContribImages>
          {data.contributors.map((c) => (
            <a href={`https://github.com/${c.github}`} target="_blank">
              <img src={`https://avatars.githubusercontent.com/${c.github}`} />
            </a>
          ))}
        </ContribImages>
        <span>
          You are passionate and want to put your talent in an amazing project
          of the ecosystem.
        </span>
        <a
          className="button"
          href="https://app.onlydust.xyz/projects/54f2df5e-decb-44d8-9a6e-d35f9b292569"
          target="_blank"
        >
          Join the Morphine's adventure
        </a>
      </Content>
    </Wrapper>
  );
};

export default Contribute;

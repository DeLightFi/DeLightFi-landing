import {
  Wrapper,
  Head,
  Text,
  Title,
  Content,
  Row,
  Timeline,
  Milestone,
  Item,
  Picture,
} from "./RoadmapElements";
import data from "./data.json";
import { useState } from "react";

const Roadmap = () => {
  const [selected, SetSelected] = useState(0);

  return (
    <Wrapper id="roadmap">
      <Content>
        <Head>
          <Text>
            <Title>{data.title}</Title>
          </Text>
        </Head>
        <Row>
          <Timeline>
            {data.milestone.map((m, i) => (
              <>
                <Milestone onClick={() => SetSelected(i)}>{m.title}</Milestone>
              </>
            ))}
          </Timeline>
          <Item>
            <span className="title">{data.milestone[selected].title}</span>
            <ul>
              {data.milestone[selected].points.map((m, i) => (
                <li>{m}</li>
              ))}
            </ul>
          </Item>
          <Picture>
            <img src={data.milestone[selected].image} />
          </Picture>
        </Row>
      </Content>
    </Wrapper>
  );
};

export default Roadmap;

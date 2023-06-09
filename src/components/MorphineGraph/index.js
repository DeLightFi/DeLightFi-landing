import React from "react";
import "@antv/graphin-icons/dist/index.css";
import Graphin, { Components, Behaviors } from "@antv/graphin";
import { FaTwitter, FaGlobe } from "react-icons/fa";
import {
  TooltipText,
  TooltipSocial,
  TooltipTitle,
  TooltipWrapper,
} from "./MorphineGraphElements";
import data from "./data.json";

const { Tooltip } = Components;
const { DragCanvas, ZoomCanvas, ActivateRelations } = Behaviors;

const MorphineGraph = () => {
  data.nodes.forEach((node) => {
    if (node?.style?.icon?.type) {
      if (node.style.icon.type == "image") {
        node.style.icon.image = process.env.URI + node.style.icon.image;
      }
    }
  });
  return (
    <Graphin
      data={data}
      theme={{ background: "transparent" }}
      layout={{
        type: "concentric",
        fitCenter: true,
        fitView: true,
        linkDistance: 100, // The edge length
        preventOverlap: true,
        nodeSpacing: 150,
        startAngle: 10,
      }}
    >
      <Tooltip hasArrow={false} style={{ position: 'absolute', top: '80%', left: '20%', border: 'solid 1px #ffffff' }}>
        {(value) => {
          if (value.model.has_descp) {
            return (
              <TooltipWrapper >
                <TooltipSocial>
                  <a href={value.model.twitter} target="_blank">
                    <FaTwitter />
                  </a>
                  <a href={value.model.website} target="_blank">
                    <FaGlobe />
                  </a>
                </TooltipSocial>
                <TooltipTitle>{value.model.label}</TooltipTitle>
                <TooltipText>{value.model.descp}</TooltipText>
              </TooltipWrapper>
            );
          } else {
            return <></>;
          }
        }}
      </Tooltip>
      <ZoomCanvas disabled={true} />
      <DragCanvas disabled={true} />
      <ActivateRelations disabled={true} />
    </Graphin>
  );
};

export default MorphineGraph;

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
const { ZoomCanvas, Hoverable } = Behaviors;

const MorphineGraph = () => {
  return (
    <Graphin data={data} theme={{ background: "#161616" }}>
      <Tooltip bindType="node" placement="top" hasArrow={false}>
        {(value) => {
          if (value.model.has_descp) {
            return (
              <TooltipWrapper>
                <TooltipSocial>
                  <a href={value.model.twitter}>
                    <FaTwitter />
                  </a>
                  <a href={value.model.website}>
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
      <ZoomCanvas disabled />
    </Graphin>
  );
};

export default MorphineGraph;

import React, { Component } from "react";

import {
  Card,
  Card3D,
  CardWrapper,
  CardImage,
  CardLayer1,
  CardLayer2,
} from "./MagicCardElements";

class MagicCard extends Component {
  componentDidMount() {
    const { name } = this.props;

    const el = document.querySelector(`.${name}`);
    let w = el.clientWidth;
    let h = el.clientHeight;
    let b = el.getBoundingClientRect();

    el.addEventListener("mousemove", (e) => {
      let X = (e.clientX - b.left) / w;
      let Y = (e.clientY - b.top) / h;

      let rX = -(X - 0.5) * 26;
      let rY = (Y - 0.5) * 26;

      let bgX = 40 + 20 * X;
      let bgY = 40 + 20 * Y;

      console.log(X, Y);
      console.log("bgX, bgY", bgX, bgY);
      console.log(rX, rY);
      el.style.setProperty("--x", 100 * X + "%");
      el.style.setProperty("--y", 100 * Y + "%");

      el.style.setProperty("--bg-x", bgX + "%");
      el.style.setProperty("--bg-y", bgY + "%");

      el.style.setProperty("--r-x", rX + "deg");
      el.style.setProperty("--r-y", rY + "deg");
    });

    el.addEventListener("mouseleave", (e) => {
      el.style.setProperty("--x", "0%");
      el.style.setProperty("--y", "0%");

      el.style.setProperty("--bg-x", "0%");
      el.style.setProperty("--bg-y", "0%");

      el.style.setProperty("--r-x", 0);
      el.style.setProperty("--r-y", 0);
    });
  }

  render() {
    const { name, img } = this.props;
    return (
      <Card className={name}>
        <CardWrapper>
          <Card3D>
            <CardImage>
              <img src={img} alt="" />
            </CardImage>
            <CardLayer1 />
            <CardLayer2 />
          </Card3D>
        </CardWrapper>
      </Card>
    );
  }
}

export default MagicCard;

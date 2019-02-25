import React, { Component } from "react";
import desktop_2x from "../photo/Desktop_header@2x.png";
import desktop from "../photo/Desktop_header.png";
import mobile_2x from "../photo/Mobile_header@2x.png";
import mobile from "../photo/Mobile_header.png";

class Panel extends Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <div style={{ position: "relative" }}>
            <picture>
              <source srcSet={desktop} media="(min-width: 1024px)" />
              <source srcSet={mobile_2x} media="(min-width: 768px)" />
              <source srcSet={mobile} media="(min-width: 375px)" />
              <img src={desktop_2x} alt="" width="100%" />
            </picture>

            <div className="text_centered">
              <span className="extra_bold">MXDC Melbourne</span> <br />{" "}
              <span className="sup_text">June 20 - 27</span>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Panel;

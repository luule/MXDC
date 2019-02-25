import React, { Component } from "react";
import Navbar from "./navbar";
import Panel from "./panel";
import Content from "./content";
import Footer from "./footer";
import "../css/style.css";

class Bravo extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize = () => {
    this.setState({
      screenWidth: window.innerWidth
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <Navbar screenWidth={this.state.screenWidth} />
          <Panel />
          <Content screenWidth={this.state.screenWidth} />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Bravo;

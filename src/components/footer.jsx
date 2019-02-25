import React, { Component } from "react";
import logo from "../icon/logo.svg";

class Footer extends Component {
  render() {
    return (
      <div className="my_footer">
        <div className="footer_logo p-2 ml-2">
          <img src={logo} width="50" height="50" />
        </div>
        <div className="footer-menu mt-3">
          <button className="btn btn-default footer_item ">Privacy</button>
          <button className="btn btn-default footer_item ">
            Term and Conditions
          </button>
          <button className="btn btn-default footer_item ">
            Frequently Asked Questions
          </button>
          <button className="btn btn-default footer_item ">Contact Us</button>
        </div>
      </div>
    );
  }
}

export default Footer;

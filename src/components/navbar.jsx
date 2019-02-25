import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import logo from "../icon/logo.svg";
import menu from "../icon/menu.svg";
import close from "../icon/close.svg";

class Navbar extends Component {
  state = {
    showModal: false
  };
  handleShow = () => {
    this.setState({ showModal: true });
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <React.Fragment>
        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Body>
            <div className="model_menu">
              <button className="btn btn-default menu_item">Program</button>
              <button className="btn btn-default menu_item">Partners</button>
              <button className="btn btn-default menu_item">Locations</button>
              <button className="btn btn-default menu_item">About MXDC</button>
              <button className="btn btn-default menu_item">Contact Us</button>
            </div>
          </Modal.Body>
        </Modal>

        <div className="my_navbar">
          <div className="navbar_logo p-2 ml-3">
            <img src={logo} />
          </div>

          <div
            className="navbar_menu"
            style={{ display: this.props.screenWidth < 768 ? "" : "none" }}
          >
            <button
              className="btn btn-default"
              onClick={this.handleShow}
              style={{ display: this.state.showModal ? "none" : "" }}
            >
              <img src={menu} />
            </button>
            <button
              className="btn btn-default"
              onClick={this.handleClose}
              style={{ display: this.state.showModal ? "" : "none" }}
            >
              <img src={close} />
            </button>
          </div>

          <div
            className="navbar_menu"
            style={{ display: this.props.screenWidth >= 768 ? "" : "none" }}
          >
            <button className="btn btn-default tab_item">
              <span /> Program
            </button>
            <button className="btn btn-default tab_item">
              <span /> Partners
            </button>
            <button className="btn btn-default tab_item">
              <span /> Locations
            </button>
            <button className="btn btn-default tab_item">
              <span /> About MXDC
            </button>
            <button className="btn btn-default tab_item">
              <span /> Contact Us
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;

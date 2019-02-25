import React, { Component } from "react";
import image from "../photo/Desktop-Tablet_placeholder-A.png";
import rightChevron from "../icon/right_chevron.svg";

class Content extends Component {
  state = {
    eventList: []
  };

  componentDidMount() {
    const myProxy = "https://cors-anywhere.herokuapp.com/";
    const url =
      "https://s3-ap-southeast-2.amazonaws.com/studiobravo/FED+Project/events.json";

    fetch(myProxy + url)
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            eventList: result
          });
        },
        error => {
          console.log(error);
        }
      );
  }

  getMarginTop = index => {
    if (this.props.screenWidth > 768) {
      switch (index % 3) {
        case 0:
          return { marginTop: "1em", marginBottom: "3em" };
        case 1:
          return { marginTop: "2em", marginBottom: "2em" };
        case 2:
          return { marginTop: "3em", marginBottom: "1em" };
      }
    } else if (this.props.screenWidth > 480 && this.props.screenWidth <= 768) {
      switch (index % 2) {
        case 0:
          return { marginTop: "1em", marginBottom: "2em" };
        case 1:
          return { marginTop: "2em", marginBottom: "1em" };
      }
    } else {
      return { marginTop: "1em" };
    }
  };

  render() {
    return (
      <div className="my_container">
        <div className="row">
          {this.state.eventList.map((event, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-sm-12"
              style={this.getMarginTop(index)}
            >
              <div className="my_card">
                <img className="card_image" src={event.imgUrlMobile} />
                <div className="card_content p-3">
                  <div className="card_detail">
                    <h5 className="card_title">{event.title}</h5>
                    <p>{event.description}</p>
                  </div>

                  <div
                    className="card_icon"
                    style={{
                      display: this.props.screenWidth <= 480 ? "" : "none"
                    }}
                  >
                    <button className="btn">
                      <img src={rightChevron} width="30" height="30" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Content;

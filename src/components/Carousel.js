import React, { Component } from "react";

class Carousel extends Component {
  render() {
    return (
      <div
        id="carouselWithIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselWithIndicators"
            data-slide-to="0"
            className="active"
          ></li>

          <li data-target="#carouselWithIndicators" data-slide-to="1"></li>

          <li data-target="#carouselWithIndicators" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner" style={{ maxHeight: "42rem" }}>
          <div className="carousel-item active">
            <img
              src={this.props.images[0]}
              className="d-block w-100"
              alt="book1"
            />
          </div>

          <div className="carousel-item">
            <img
              src={this.props.images[1]}
              className="d-block w-100"
              alt="book2"
            />
          </div>

          <div className="carousel-item">
            <img
              src={this.props.images[2]}
              className="d-block w-100"
              alt="book3"
            />
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#carouselWithIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>

          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselWithIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>

          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Carousel;

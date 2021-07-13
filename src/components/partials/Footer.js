import React, { Component } from "react";
import "../../css/partials/footer.css";

class Footer extends Component {
  getCurrentYear() {
    return new Date().getUTCFullYear();
  }

  render() {
    return (
      <footer className="app__footer bg-dark">
        <p className="lead">
          &copy; Copyright {this.getCurrentYear()} | Books Store
        </p>

        <div className="d-flex justify-content-center align-items-center mt-3">
          <a className="social" href="#!" title="email">
            <i className="fas fa-envelope fa-2x"></i>
          </a>

          <a className="social" href="#!" title="linkedin">
            <i className="fab fa-linkedin-in fa-2x"></i>
          </a>

          <a className="social" href="#!" title="facebook">
            <i className="fab fa-facebook-f fa-2x"></i>
          </a>

          <a className="social" href="#!" title="instagram">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;

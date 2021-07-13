import React, { Component } from "react";
import "../../css/pages/login.css";
import LoginService from "../../services/LoginService";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      token: "",
      showSuccess: false,
      showError: false,
      successMessage: "",
      errorMessage: "",
    };

    this.LoginService = new LoginService();
  }

  getSuccessMessage = () => {
    if (this.state.successMessage) {
      return (
        <div className="row mt-3">
          <div className="col-sm-12 col-md-6 mx-auto">
            <div className="alert alert-success" role="alert">
              <p className="lead">{this.state.successMessage}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  getErrorMessage = () => {
    if (this.state.errorMessage) {
      return (
        <div className="row mt-3">
          <div className="col-sm-12 col-md-6 mx-auto">
            <div className="alert alert-danger" role="alert">
              <p className="lead">{this.state.errorMessage}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  changeInput = (e) => {
    let inputName = e.target.name;

    let inputValue = e.target.value;

    this.setState({
      [inputName]: inputValue,
    });
  };

  validateEmail = (email) => {
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!pattern.test(email)) {
      alert("Indirizzo email non valido!");

      return false;
    }

    return true;
  };

  validatePassword = (password) => {
    if (password.length < 8) {
      alert("La tua password è troppo corta!");

      return false;
    }

    return true;
  };

  loginSuccess = (response) => {
    this.setState({
      token: response.token,
      showSuccess: true,
      successMessage: "Login effettuato con successo!",
      showError: false,
      errorMessage: "",
    });

    setInterval(this.props.history.push("/books"), 3000);
  };

  loginError = (error) => {
    this.setState({
      token: "",
      showSuccess: false,
      successMessage: "",
      showError: true,
      errorMessage: "Login fallito! Errore: " + error.error,
    });
  };

  login = () => {
    let validEmail = this.validateEmail(this.state.email);

    let validPassword = this.validatePassword(this.state.password);

    if (validEmail && validPassword) {
      this.LoginService.login(
        this.state.email,
        this.state.password,
        this.loginSuccess,
        this.loginError
      );
    }
  };

  sendForm = (e) => {
    e.preventDefault();

    this.login();
  };

  render() {
    let successMessage = this.getSuccessMessage();

    let errorMessage = this.getErrorMessage();

    return (
      <div className="app__main__login">
        <h1 className="text-center mb-3">
          Siamo felici di riaverti da queste parti!
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 mx-auto">
              <form onSubmit={this.sendForm}>
                <div className="form-group">
                  <label htmlFor="email">
                    Email <span className="text-danger">*</span>
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.changeInput}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    Password <span className="text-danger">*</span>
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.changeInput}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-block btn-dark mb-3">
                  Login
                </button>

                <a href="/register" title="register">
                  Non sei ancora registrato?
                </a>
              </form>
            </div>
          </div>

          {this.state.showSuccess ? successMessage : ""}

          {this.state.showError ? errorMessage : ""}
        </div>
      </div>
    );
  }
}

export default Login;

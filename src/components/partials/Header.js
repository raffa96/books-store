import React, { Component } from "react";
import "../../css/partials/header.css";
import logo from "../../images/logo.png";

class Header extends Component {
  render() {
    return (
      <header className="app__header bg-dark">
        <a href="/" className="app__header__logo" title="logo">
          <img src={logo} alt="logo" />
        </a>

        <nav className="app__header__nav">
          <ul className="app__header__nav__menu">
            <li className="app__header__nav__menu__item">
              <a href="/" title="home">
                HOME
              </a>
            </li>

            <li className="app__header__nav__menu__item">
              <a href="/books" title="books">
                BOOKS
              </a>
            </li>

            <li className="app__header__nav__menu__item">
              <a href="/login" title="login">
                LOGIN
              </a>
            </li>

            <li className="app__header__nav__menu__item">
              <a href="/register" title="register">
                REGISTRAZIONE
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIconClicked: false,
    };
  }

  // handle menu icon click
  handleMenuIconClick = () => {
    this.setState({ menuIconClicked: !this.state.menuIconClicked });
  };

  // handling navbar items button click
  // on small screen when we click a button then menu list should be hidden
  handleButtonClick = () => {
    this.setState({ menuIconClicked: false });
  };

  // rendering navbar component
  render() {
    return (
      <nav className="navbar-container unselectable">
        <div className="navbar-logo">
          <Link to="/" onClick={this.handleButtonClick}>
            E Mart
          </Link>
        </div>
        <div className="menu-icon" onClick={this.handleMenuIconClick}>
          <i
            className={
              this.state.menuIconClicked ? "fa fa-times" : "fa fa-bars"
            }
            aria-hidden="true"
          ></i>
        </div>
        <ul
          className={
            this.state.menuIconClicked ? "navbar-menu active" : "navbar-menu"
          }
        >
          <li>
            <Link
              className="navbar-links"
              to="/"
              onClick={this.handleButtonClick}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              className="navbar-links"
              to="/add-product"
              onClick={this.handleButtonClick}
            >
              Add Product
            </Link>
          </li>
          <li>
            <Link
              className="navbar-links"
              to="/cart"
              onClick={this.handleButtonClick}
            >
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

// passing store props to component

export default Navbar;
